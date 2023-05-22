<template>
    <div id="realtime-container"/>
</template>

<style scoped>
    #realtime-container {
        height: 100%
    }
</style>
<script>
import * as sp from 'seisplotjs';
import * as log from 'loglevel';
import * as log_prefix from 'loglevel-plugin-prefix';

export default {
    name: 'SeedlinkDisplay',

    props: {
    },

    data() {
        return {
            graph_list: new Map(),
            duration: sp.luxon.Duration.fromISO('PT15M'),
            num_packets: 0,
            redraw_in_progress: false,
        }
    },

    created() {
        let prefix_options = {
            template: '[%t] - %l - %n:',
            levelFormatter: function (level) {
                return level.toUpperCase();
            },
            nameFormatter: function (name) {
                return name || 'root';
            },
            timestampFormatter: function (date) {
                return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
            },
            format: undefined
        }
        this.logger = log.getLogger('seisplot_example')
        this.logger.setLevel('DEBUG');
        log_prefix.apply(this.logger,
                         prefix_options);
    },

    mounted() {
        //this.init_seismograph();
        this.start_datalink();
        this.start_update_timer();
    },

    computed: {       
        graph: function() {
            const graph = document.querySelector('div#realtime-container');
            return graph;
        },

        datalink: function() {
            const datalink = new sp.datalink.DataLinkConnection(
                "ws://192.168.1.91:16000/datalink",
                this.packet_handler,
                this.error_func);
            return datalink;
        },

        time_window: function() {
            let time_window = new sp.util.durationEnd(this.duration,
                                                      sp.luxon.DateTime.utc());
            return time_window;
        },

        timer_interval: function() {
            let rect = this.graph.getBoundingClientRect();
            let margin_left = this.seis_plot_config.margin.left;
            let margin_right = this.seis_plot_config.margin.right;
            let timer_interval = this.duration.toMillis()/
                (rect.width - margin_left - margin_right);
            while (timer_interval < 50) { timer_interval *= 2;}
            return timer_interval;
        },

        seis_plot_config: function() {
            let seisPlotConfig = new sp.seismographconfig.SeismographConfig();
            seisPlotConfig.wheelZoom = false;
            seisPlotConfig.isYAxisNice = false;
            seisPlotConfig.linkedTimeScale.offset = sp.luxon.Duration.fromMillis(-1 * this.duration.toMillis());
            seisPlotConfig.linkedTimeScale.duration = this.duration;
            seisPlotConfig.linkedAmplitudeScale = new sp.scale.IndividualAmplitudeScale();
            seisPlotConfig.doGain = true;
            return seisPlotConfig; 
        },
    },

    methods: {
        start_datalink: function() {
            let datalink = this.datalink;
            let self = this;
            const matchPattern = `.`;
            const time_window = this.time_window;
            
            if (datalink) {
                datalink.connect()
                    .then(serverId => {
                        self.logger.debug('id response: ' + serverId);
                        return datalink.match(matchPattern);
                    }).then(response => {
                        self.logger.debug('match response: ' + response)
                        if (response.isError()) {
                            self.logger.debug('response is not OK, ignore... ' + response);
                        }
                        return datalink.infoStatus();
                    }).then(response => {
                        self.logger.debug('info status response: ' + response);
                        return datalink.infoStreams();
                    }).then(response => {
                        self.logger.debug('info streams response: ' + response)
                        return datalink.positionAfter(time_window.start);
                    }).then(response => {
                        if (response.isError()) {
                            self.logger.debug('Oops, positionAfter response is not OK, ignore...' + response);
                            // bail, ignore, or do something about it...
                        }
                        return datalink.stream();
                    }).catch( function(error) {
                        let errMsg = `${error}`;
                        if (error.cause && error.cause instanceof sp.datalink.DataLinkResponse) {
                            errMsg = `${error}, ${errMsg.cause}`;
                        }
                        self.logger.error("Error: " + errMsg);
                    });
            }
        },

        start_update_timer: function() {
            let self = this;
            let timer = window.setInterval(function(elapsed) {
                if ( self.redraw_in_progress) {
                    return;
                }
                self.redraw_in_progress = true;
                window.requestAnimationFrame(timestamp => {
                    try {
                        const now = sp.luxon.DateTime.utc();
                        let i=0;
                        self.graph_list.forEach(function(graph, key) {
                            graph.seisData.forEach(sdd => {
                                sdd.alignmentTime = now;
                            });
                            graph.calcTimeScaleDomain();
                            graph.calcAmpScaleDomain();
                            //Anpassungen treffen, bevor der Graph gezeichnet wird
                            if(i==0) {
                                graph.seismographConfig.title = 'X-Achse';
                            
                            } 
                            if(i==1) {
                                graph.seismographConfig.title = 'Y-Achse';
                            }
                            if(i==2) {
                                graph.seismographConfig.title = 'Z-Achse';
                            }
                            graph.draw(); //Hier wird der der Graph gezeichnet
                            i++;
                        });
                    } catch(err) {
                        self.logger.error('Error in timer: ' + err);
                    }
                    self.redraw_in_progress = false;
                });
                
            }, self.timer_interval);
        },
        
        packet_handler: function(packet) {
            if (packet.isMiniseed()) {
                this.num_packets++;
                this.logger.debug('num_packets: ' + this.num_packets);
                let seisSegment = sp.miniseed.createSeismogramSegment(packet.asMiniseed());
                const codes = seisSegment.codes();
                let seisPlot = this.graph_list.get(codes);
                if ( ! seisPlot) {
                    let seismogram = new sp.seismogram.Seismogram( [ seisSegment ]);
                    let seisData = sp.seismogram.SeismogramDisplayData.fromSeismogram(seismogram);
                    seisData.alignmentTime = sp.luxon.DateTime.utc();
                    seisPlot = new sp.seismograph.Seismograph([seisData],
                                                              this.seis_plot_config);
                    this.graph.appendChild(seisPlot);
                    this.graph_list.set(codes, seisPlot);
                    this.logger.debug('new plot: ' + codes)
                } else {
                    seisPlot.seisData[0].append(seisSegment);
                    seisPlot.recheckAmpScaleDomain();
                }
                seisPlot.draw();
            } else {
                this.logger.error('not a mseed packet: ' + packet.streamId);
            }
        },

        error_func: function(error) {
            this.logger.error('error_func: ' + error);
            if (this.datalink) {this.datalink.close();}
        },
    }

}
</script>

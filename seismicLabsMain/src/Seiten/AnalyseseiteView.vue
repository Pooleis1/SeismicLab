<template>
      <Header />
      <h1> Analyse Seite</h1>
      <div id="seismogramme">

        <div class="tableContainer">
            <table>
                <tr>
                <th>Stufe</th>
                <th>Beschreibung</th>
                <th>Beschleunigung</th>
                <th class="verticalSplit">Richterskala</th>
                </tr>
                <tr>
                <td>I</td>
                <td>unmerklich</td>
                <td>&lt 0,001g</td>
                <td class="verticalSplit"> &lt 2</td>
                </tr>
                <tr>
                <td>II</td>
                <td>sehr leicht</td>
                <td>0,001-0,014</td>
                <td class="verticalSplit">2</td>
                </tr>
                <tr>
                <td>III</td>
                <td>leicht</td>
                <td>0,015-0,039</td>
                <td class="verticalSplit">3</td>
                </tr>
                <tr>
                <td>IV</td>
                <td>mäßig</td>
                <td>0,04-0,092</td>
                <td class="verticalSplit">4</td>
                </tr>
                <tr>
                <td>V</td>
                <td>ziemlich stark</td>
                <td>0,093-0,18</td>
                <td class="verticalSplit">5,0-5,2</td>
                </tr>
                <tr>
                <td>VI</td>
                <td>stark</td>
                <td>0,19-0,34</td>
                <td class="verticalSplit" >5,3-5,9</td>
                </tr>
                <tr>
                <td>VII</td>
                <td>sehr stark</td>
                <td>0,35-0,65</td>
                <td class="verticalSplit" >6,0-6,9</td>
                </tr>
                <tr>
                <td>VIII</td>
                <td>zerstörend</td>
                <td>0,66-1,24</td>
                <td class="verticalSplit" >7,0-7,3</td>
                </tr>
                <tr>
                <td>IX</td>
                <td>verwüstend</td>
                <td>0,2-0,5</td>
                <td class="verticalSplit" ></td>
                </tr>
            </table>
          </div>
          
      </div>
      <div id="gauge"> </div>
  </template>
  	
  
  <script>
  import Header from '../components/Header.vue'
  
  export default {
    name: 'AnalyseseiteView',
    components: {
      Header
    },
  }

  var data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: 4,
    title: { text: "Stärke" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { 
        range: [0, 10], // Adjust the range to narrow it down
        tickmode: "linear",
        tick0: 0,
        dtick: 1,  // Set the desired interval between ticks
      },
      bar: { color: "white" },
      steps: [
        { range: [0, 3], color: "green" },
        { range: [3, 5], color: "orange" },
        { range: [5, 10], color: "red" }                                                               
      ]
    },
    bgcolor: "white",
    step: 1
  }
];

var layout = { width: 400, height: 280, margin: { t: 0, b: 0 } };

function showGauge() {
  if(document.getElementById("gauge") != null) {
    Plotly.newPlot('gauge', data, layout);
  }
}

setInterval(showGauge,1000)

  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  body {
    margin: 0px;
    padding: 0px;
  }
  
  #seismogramme {
    padding: 20px;
    height: 80%;
  }

		table {
			border-collapse: collapse;
			margin: 0 auto;
			margin-top: 20px;
		}
		th, td {
			padding: 8px;
			text-align: center;
            font-family: Verdana, Regular;
            font-size: 15px;
			color: #212121;
            border-right: solid 1px #212121; 
		}
    tr{
      border: none;
    }
    .verticalSplit:last-of-type{
        border-right: none;
    }
		th {
            color: #121212;
            font-weight: bold;
            text-align: center;
            font-size: 17px;
            border-bottom: solid 1px #212121;
    }
  </style>
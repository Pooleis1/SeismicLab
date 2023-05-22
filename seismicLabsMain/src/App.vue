<template>
  <div style="height: 100%;">
      <component style="height:100%;" :is="activeComponent" :key="activeComponent" />
  </div>
</template>

<script>
import HauptseiteView from './Seiten/HauptseiteView.vue';
import UhrzeitView from './Seiten/UhrzeitView.vue';
import AnalyseseiteView from './Seiten/AnalyseseiteView.vue';
import AnlockseiteView from './Seiten/AnlockseiteView.vue';


export default {
  name: 'App',
  components: {
    HauptseiteView,
    UhrzeitView,
    AnalyseseiteView,
    AnlockseiteView
  },
  data() {
    return {
      activeComponent: 'HauptseiteView',
      time: 6000,
    }
  },
  mounted() {
    setInterval(this.changeComponent, this.time) //changes in time intervals
  },
  methods: {
    changeComponent() {
      console.log("switch")
      switch (this.activeComponent) {
        case 'HauptseiteView':
          this.activeComponent = 'UhrzeitView'
          console.log("Haupseite zu Uhrzeit")
          this.time= 6000
          break
        case 'UhrzeitView':
          this.activeComponent = 'AnalyseseiteView'
          console.log("Uhrzeit zu Analyseseite")
          this.time= 6000
          break
        case 'AnalyseseiteView':
          this.activeComponent = 'AnlockseiteView'
          console.log("Uhrzeit zu Hauptseite")
          this.time= 6000
          break
        case 'AnlockseiteView':
          this.activeComponent = 'HauptseiteView'
          console.log("Uhrzeit zu Hauptseite")
          this.time= 60000
          break
        default:
          this.activeComponent = 'HauptseiteView'
          break
      }
    },
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style>

#app, html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-color: white;
}
</style>
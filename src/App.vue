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
import AnimationView from './Seiten/AnimationView.vue';
import SpektrogrammView from './Seiten/SpektrogrammView.vue';

export default {
  name: 'App',
  components: {
    HauptseiteView,
    UhrzeitView,
    AnalyseseiteView,
    AnlockseiteView, 
    AnimationView,
    SpektrogrammView
  },
  data() {
    return {
      activeComponent: 'HauptseiteView',
      //activeComponent: 'SpektrogrammView',
      time: 14000
    }
  },
  mounted() {
  //this.changeComponentWithDelay();

},
methods: {
  changeComponentWithDelay() {
    switch (this.activeComponent) {
      case 'HauptseiteView':
        console.log("Hauptseite zu Uhrzeit");
        this.activeComponent = 'UhrzeitView';
        setTimeout(() => {
          this.changeComponentWithDelay();
        }, 8000);
        break;
      case 'UhrzeitView':
        console.log("Uhrzeit zu Spektrogramm");
        this.activeComponent = 'SpektrogrammView';
        setTimeout(() => {
          this.changeComponentWithDelay();
        }, 15000); //Seite mit dem Spektogramm wird 15 Sekunden angezeigt
        break;
      case 'SpektrogrammView':
        console.log("Spektrogramm zu Anlockseite");
        this.activeComponent = 'AnlockseiteView';
        setTimeout(() => {
          this.changeComponentWithDelay();
        }, 8000);
        break;
      case 'AnlockseiteView':
        console.log("Anlockseite zu Animation");
        this.activeComponent = 'AnimationView';
        setTimeout(() => {
          this.changeComponentWithDelay();
        }, 5050);
        break;
      case 'AnimationView':
        console.log("Animation zu Hauptseite");
        this.activeComponent = 'HauptseiteView';
        setTimeout(() => {
          this.changeComponentWithDelay();
        }, 15000); //Hautpseite wird 15 Sekunden angezeigt
        break;
      default:
        this.activeComponent = 'HauptseiteView';
        setTimeout(() => {
          this.changeComponentWithDelay();
        }, 10000);
        break;
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
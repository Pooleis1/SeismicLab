<template>
  <div>
    <HauptseiteView v-if="activeComponent === 'HauptseiteView'" />
    <UhrzeitView v-else-if="activeComponent === 'UhrzeitView'" />
  </div>
</template>

<script>
import HauptseiteView from './Seiten/HauptseiteView.vue';
import UhrzeitView from './Seiten/UhrzeitView.vue';
export default {
  name: 'App',
  components: {
    HauptseiteView,
    UhrzeitView
  },
  data() {
    return {
      activeComponent: 'HauptseiteView',
    }
  },
  mounted() {
    setInterval(this.changeComponent, 5000) // change component every 5 seconds
  },
  methods: {
    changeComponent() {
      console.log("switch")
      switch (this.activeComponent) {
        case 'HauptseiteView':
          this.activeComponent = 'UhrzeitView'
          console.log("Haupseite zu Uhrzeit")
          break
        case 'UhrzeitView':
          this.activeComponent = 'HauptseiteView'
          console.log("Uhrzeit zu Hauptseite")
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
}
</style>

<style v-if="this.activeComponent === 'UhrzeitView'">
#app, html, body {
  background-color: #212121;
}
</style>

<style v-else>
#app, html, body {
  background-color: white;
}
</style>
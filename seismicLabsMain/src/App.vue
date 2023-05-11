<template>
    <div id="app">
      <Header />
      <br>
      <div id="seismogramme">
        <SeedlinkDisplay />
      </div>
    </div>
</template>

<script>
import SinewaveDisplay from './components/SinewaveDisplay.vue'
import SeedlinkDisplay from './components/SeedlinkDisplay.vue'
import Header from './components/Header.vue'

export default {
    name: 'app',

    components: {
        SinewaveDisplay,
        SeedlinkDisplay, 
        Header
    },
}
</script>

<style>
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
    heigth: 80%;

  }

</style>
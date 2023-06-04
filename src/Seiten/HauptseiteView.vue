<template>
  <Header />
  <div class="content">
    <h1> Seismogramme </h1>
    <div id="seismogramme">
      <SeedlinkDisplay />
    </div>
  </div>
</template>

<script>
import SinewaveDisplay from '../components/SinewaveDisplay.vue'
import SeedlinkDisplay from '../components/SeedlinkDisplay.vue'
import Header from '../components/Header.vue'

export default {
  name: 'HauptseiteView',
  components: {
    SinewaveDisplay,
    SeedlinkDisplay,
    Header
  },
}
</script>

<style scoped>
h1 {
  box-sizing: border-box;
  font-family: Verdana;
  text-align: left;
  color: black;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0px;
  padding: 0px;
}

#seismogramme {
  padding: 20px;
  height: 28%;
}

.content {
  width: 100%;
  height: 90%;
}
</style>
<template>
    <Header />
    <div class="content">
      <h1> Spektrogramm</h1>
      <img class="spectrogram" src="../../spectrogram.png" />
      <img class="plot" src="../../plot.png" />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  
  export default {
    name: 'SpektrogrammView',
    components: {
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
  
}
  
  * {
    margin: 0px;
    padding: 0px;
  }

  
  .content {
    box-sizing: border-box;
    width: 100%;
    height: 90%;
    padding: 20px;
  }

  .spectrogram {
    width: 100%;
    
  }
  .plot {
    width: 100%;
  }

  </style>
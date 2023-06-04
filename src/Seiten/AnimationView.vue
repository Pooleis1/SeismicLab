<template>
    <img id="img" src="../assets/animation.gif">
</template>
        
  <script>
  export default {
    name: "AnimationView",
    components: {
  
    }
  }
  function displayTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      if(document.getElementById('clock') != null) {
        document.getElementById('clock').innerHTML = timeString;
      }
  }
  
  setInterval(displayTime, 100);
  </script>
  <style scoped>
    html,body {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
    #img {
        width: 100%;
    }
  </style>
        
<template>
  <div id="clockContainer">
    <svg class="Icon_open-clock" viewBox="0 0 400 400">
      <path id="Icon_open-clock" d="M 200 0 C 90.00000762939453 0 0 90 0 200 C 0 310.0000305175781 90.00000762939453 400 200 400 C 309.9999694824219 400 400 310.0000305175781 400 200 C 400 90 309.9999694824219 0 200 0 Z M 200 50 C 282.9999694824219 50 350.0000305175781 117.0000228881836 350.0000305175781 200 C 350.0000305175781 283 282.9999694824219 350 200 350 C 117.0000152587891 350 50 283 50 200 C 50 117.0000228881836 117.0000152587891 50 200 50 Z M 175.0000152587891 100 L 175.0000152587891 211 L 182.9999847412109 217.5 L 207.9999847412109 242.5 L 225 261.5000305175781 L 261 225.5 L 242 208.5 L 224.9999542236328 191.4999847412109 L 224.9999542236328 100.9999771118164 L 175 100.9999771118164 L 175.0000152587891 100 Z"> </path>
    </svg>
    <label id="clock"></label>
  </div>
</template>
      
<script>
export default {
  name: "UhrzeitView",
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

  #clockContainer {
    width: 100%;
    height: 100%;
    font-size: 240px;
    font-weight: bold;
    text-align: center;
    font-family: Verdana;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    background-color: #212121;

  }

  .Icon_open-clock {
      overflow: visible;
      width: 300px;
      height: 300px;
      transform: matrix(1,0,0,1,0,0);
  }
  #Icon_open-clock {
      fill: rgba(255,255,255,1);
  }
  #clockiconContainer {
      display: flex;
  }
</style>


      
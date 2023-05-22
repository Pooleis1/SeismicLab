<template>
    <!-- Header für alle Seiten des Dashboards -->
    <div id="header">
      <div class="logocontainer">
        <img src="../assets/logo.png" alt="Logo SeismicLabs">
        <div class="line"></div>
        <h1> Erschütterungsmessungen</h1>
      </div>

      <div class="textcontainer">
        <p> MSS Sensor</p>
        <div class="line"></div>
        <svg class="Icon_material-place" viewBox="7.5 3 28.359 40">
			<path id="Icon_material-place" d="M 21.67935752868652 2.999999523162842 C 13.8401985168457 2.999999523162842 7.5 9.260001182556152 7.5 17 C 7.5 27.5 21.67935752868652 43 21.67935752868652 43 C 21.67935752868652 43 35.85871505737305 27.5 35.85871505737305 17 C 35.85871505737305 9.260001182556152 29.51851654052734 2.999999523162842 21.67935752868652 2.999999523162842 Z M 21.67935752868652 22.00000190734863 C 18.88399887084961 22.00000190734863 16.61530113220215 19.76000022888184 16.61530113220215 17 C 16.61530113220215 14.2400016784668 18.88399887084961 12.00000095367432 21.67935752868652 12.00000095367432 C 24.47471618652344 12.00000095367432 26.7434139251709 14.2400016784668 26.7434139251709 17 C 26.7434139251709 19.76000022888184 24.47471618652344 22.00000190734863 21.67935752868652 22.00000190734863 Z">
			</path>
		</svg>
        <p>H933</p>
        <div class="line"> </div>
        <svg class="Icon_open-clock" viewBox="0 0 40 40">
			<path id="Icon_open-clock" d="M 19.99999809265137 0 C 9 0 0 9 0 20 C 0 31 9 40 19.99999809265137 40 C 30.99999618530273 40 39.99999618530273 31 39.99999618530273 20 C 39.99999618530273 9 30.99999618530273 0 19.99999809265137 0 Z M 19.99999809265137 5 C 28.29999542236328 5 35 11.70000076293945 35 20 C 35 28.29999923706055 28.29999542236328 35 19.99999809265137 35 C 11.69999980926514 35 4.999999523162842 28.29999923706055 4.999999523162842 20 C 4.999999523162842 11.70000076293945 11.69999980926514 5 19.99999809265137 5 Z M 17.5 10 L 17.5 21.09999847412109 L 18.29999732971191 21.74999809265137 L 20.79999542236328 24.24999809265137 L 22.49999809265137 26.14999961853027 L 26.09999847412109 22.54999923706055 L 24.19999694824219 20.84999847412109 L 22.4999942779541 19.14999771118164 L 22.4999942779541 10.09999752044678 L 17.49999809265137 10.09999752044678 L 17.5 10 Z">
			</path>
		</svg>
    <div id="clockContainer">
       <label id="clock"></label>
    </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
  }
}
function displayTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        document.getElementById('clock').innerHTML = timeString;
      }
      setInterval(displayTime, 1000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
        background-color: #212121;
        display: flex;
        padding: 10px;
        height: 10%;
     }
     .logocontainer {
        display: flex;
        width: 50%;
        height: 100%;
        align-items: center;
     }
     .textcontainer {
        display: flex;
        width: 50%;
        height: 100%;
        justify-content: flex-end;
        align-items: center;
     }
     .logocontainer img {
        margin-left: 5%;
        margin-top: 0;
        margin-bottom: 0;
        height: 85%;
    }
    h1 {
        color: white; 
        font-family: Verdana;
        font-style: bold;
        font-size: 2em;
    }
    p {
        color: white;
        font-family: Verdana;
        font-style: bold;
        font-size: 2em;
    }
    .line {
        margin-left: 2%;
        margin-right: 2%;
        border-left: 4px solid white;
        height: 90%;
    }
    #Icon_material-place {
		fill: rgba(255,255,255,1);
	}
	.Icon_material-place {
        margin-right: 2%;
		overflow: visible;
		width: 28.359px;
		height: 40px;
		left: 1486.641px;
		top: 29px;
		transform: matrix(1,0,0,1,0,0);
	}
    #Icon_open-clock {
		fill: rgba(255,255,255,1);
	}
	.Icon_open-clock {
		overflow: visible;
        margin-right: 2%;
		width: 40px;
		height: 40px;
		left: 1672px;
		top: 29px;
		transform: matrix(1,0,0,1,0,0);
	}
  #clockContainer {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        font-family: Verdana;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
  }
  #clockiconContainer {
        display: flex;
    }
</style>

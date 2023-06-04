<template>
    <!-- Boxen für die Seiten -->
    <div id="box">
        <div class="header">
            <h1>{{headline}}</h1>
        </div>
        <div class="input">
            {{content}}
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    headline: String,
    content: Object
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #box {
        background-color: #F2F2F2;
        margin: 0 auto;
        max-width: 650px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
     }
     .header {
        background-color: #121212;
        padding: 5px;
        height: 20%;
     }
     .input {
        padding: 20px;
     }
    h1 {
        color: #FFFFFF; 
        font-family: Verdana;
        font-style: bold;
        font-size: 25px;
        text-align: center;
    }
</style>

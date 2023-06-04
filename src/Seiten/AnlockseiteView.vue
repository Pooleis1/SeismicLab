<template>
<Header />
  <div class="container">
    <div>
      <!---
      <h1 class="title">Erlebe die Beben der Schule!</h1>
      <p class="description">Wenn du dich jemals gefragt hast, wie es ist, ein Erdbeben zu erleben, dann bist du hier genau richtig. Die Seismologie ist die Wissenschaft von Erdbeben und anderen seismischen Aktivitäten, und wir helfen dir dabei, die faszinierende Welt der Geowissenschaften zu entdecken.</p>
      <p class="description">Unsere Seite ist voller Informationen zur Seismologie, von den Grundlagen der Plattentektonik bis hin zur neuesten Forschung zur Vorhersage von Erdbeben. Ob du Schüler, Wissenschaftler oder einfach jemand bist, der gerne über die Naturwissenschaften lernt, bei uns findest du garantiert etwas Passendes.</p>
      <p class="description">Also, worauf wartest du? Starte jetzt die spannende Welt der Seismologie zu erkunden!</p>
      -->
      <img id="bild" src="../assets/guesswhat.jpg" />
      <p id="satz" class="random-sentence">{{ randomSentence }}</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'AnlockseiteView',
  components: {
    Header,
  },
  data() {
    return {
      sentences: [
        'Was sagt ein Erdbeben zu einem anderen? "Na, wie läuft\'s?"',
        'Wusstest du, dass Erdbeben auch tanzbegeistert sind? Sie mögen Schüttelrhythmen!',
        'Seismologen haben einen festen Boden unter den Füßen, aber sie lieben es, die Welt zu erschüttern!',
        'Warum sind Seismologen so gute Zuhörer? Weil sie immer ein offenes Ohr für die Erdbeben haben!',
        'Erdbeben können auch mal ziemlich bebenst sein!',
        'Wusstest du, dass die Erde manchmal einfach nur ein bisschen zittern möchte, um sich zu entspannen?',
        'Seismologie ist wie Detektivarbeit - immer auf der Suche nach den Spuren der Erdbeben!',
        'Wenn es ein Erdbeben gäbe, das wie ein Kuchen schmeckt, wäre es wohl ein Erdbebenbecher!',
        'Seismologen haben ein starkes Verlangen, die Welt zu erschüttern und gleichzeitig für Stabilität zu sorgen.',
        'Erdbeben sind wie Natur-Massagen für die Erde - sie sorgen für Entspannung und Erleichterung!',
      ],
      randomSentence: '',
    };
  },
  mounted() {
    this.selectRandomSentence();
    setInterval(this.selectRandomSentence, 24 * 60 * 60 * 1000); // Wartezeit in Millisekunden (24 Stunden)
  },
  methods: {
    selectRandomSentence() {
      const randomIndex = Math.floor(Math.random() * this.sentences.length);
      this.randomSentence = this.sentences[randomIndex];
    },
  },
};
</script>

<style>
.container {
  height: 90%;
}

.container div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 40px;
  color: #333;
}

.description {
  font-size: 24px;
  color: #666;
}

.subtitle {
  font-size: 25pt;
  color: #333;
}

.random-sentence {
  font-size: 20px;
  color: #666;
}
#satz {
  font-size: 35pt;
}
#bild {
  width: 25%;
}
</style>

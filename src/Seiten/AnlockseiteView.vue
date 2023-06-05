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
        'Chuck Norris spielt Mikado auch beim Erdbeben',
        '"In der Stadt Krsna Mladowitcz gab es ein Erdbeben."  „So so, und weiß man wie die Stadt vor dem Erdbeben hieß?“',
        'Warum hat das Erdbeben einen eigenen Instagram-Account eröffnet? Um Likes und Follower zu erschüttern!',
        'Was sagt ein Erdbeben, wenn es ein Geheimnis hat? "Ich kann es nicht für mich behalten, es wird die ganze Stadt erschüttern!"',
        'Warum hat das Erdbeben den Kaffee verschüttet? Weil es dachte, es wäre ein Shake!',
        'Was sagt ein Erdbeben, das sich nicht entscheiden kann? "Ich kann mich einfach nicht zusammenreißen, ich bin ein Riss im System!"',
        'Was sagt ein Erdbeben, wenn es aufs Smartphone starrt? "Diese Technik macht mich echt wackelig!"',
        'Warum hat das Erdbeben eine Karriere als Musikproduzent verpasst? Weil es zu sehr in den Bass versunken ist und keine Höhen und Tiefen ausbalancieren konnte!',
        'Was sagt ein Erdbeben, das den Jackpot im Casino gewonnen hat? "Ich habe die Erde zum Beben gebracht und jetzt auch noch die Kasse erschüttert!"',
        'Warum war der Gärtner begeistert vom Erdbeben? Weil es ihm dabei half, den Boden für neue Pflanzen perfekt aufzulockern!',
        'Warum war der Archäologe glücklich über das Erdbeben? Weil es ihm dabei half, noch tiefere Einblicke in vergangene Zeiten zu gewinnen!',
        'Was sagt das Gebäude zum Erdbeben? "Du bringst mich zum Schwanken, aber ich bleibe standhaft!"',
        'Warum lieben die Kinder das Erdbeben? Weil es ihnen das Gefühl gibt, auf einer lebendigen Achterbahn zu sein!',
        'Warum hat das Erdbeben den neuen Job abgelehnt? Es konnte sich nicht mit der "festen" Arbeitszeit anfreunden!',
        'Was ist das Lieblingslied eines Seismologen? "Shake It Off" von Taylor Swift!',
        'Warum sind Seismologen die besten Partygäste? Weil sie wissen, wie man die Stimmung zum "Beben" bringt!',
        'Warum haben Seismologen immer einen festen Stand? Weil sie wissen, wie man sich in "erschütternden" Situationen behauptet!',
        'Warum sind Seismologen so gute Freunde? Weil sie immer bereit sind, in schwierigen Zeiten "Standhaftigkeit" zu zeigen!',
        'Wie nennt man ein Erdbeben, das gerne klatscht? Ein "beifallserregendes Beben"!',
        'Was sagt ein Seismologe, wenn er ein besonders starkes Erdbeben spürt? "Das hat ordentlich gerockt!"',
        'Warum haben Seismologen selten Schlafprobleme? Weil sie wissen, wie man sich in jeder Lage "festhält"!',
        'Warum haben Seismologen oft ein aufregendes Liebesleben? Weil sie es gewohnt sind, von "erdbebenartigen Gefühlen" überwältigt zu werden und in jeder Lage standhaft sind',
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

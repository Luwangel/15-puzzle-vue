<template>
  <div class="board">
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else-if="myGame">
      <Grid/>
      <Moves v-if="turn" :turn="turn"/>
      <Victory v-if="isVictory" :turn="turn"/>
      <Options/>
    </div>
    <div>
      <button @click="restart()">Restart Game</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Loading from "./Loading.vue";
import Grid from "./puzzle/Grid.vue";
import Victory from "./Victory.vue";
import Moves from "./Moves.vue";
import Options from "./Options.vue";

export default {
  name: "Game",
  components: {
    Loading,
    Grid,
    Victory,
    Moves,
    Options
  },
  computed: {
    ...mapState({
      myGame: state => state.games.myGame,
      turn: state => (state.games.myGame ? state.games.myGame.turn : -1),
      isVictory: state => state.games.myGame && state.games.myGame.isVictory,
      loading: state => state.games.loading
    })
  },
  methods: {
    ...mapActions({
      restart: "games/buildInitialGame"
    })
  },
  created() {
    this.restart();
  }
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  margin: auto;
}

button {
  border-radius: 6px;
  background-color: #42b983;
  color: #35495e;
  padding: 10px;
  outline: none;
  cursor: pointer;
}

button:hover {
  background-color: #76e4b2;
  outline: none;
}

button:active {
  background-color: #1c7950;
  color: #42b983;
  outline: none;
}
</style>

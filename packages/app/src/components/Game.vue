<template>
  <div class="board">
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else-if="myGame">
      <Grid/>
      <Moves v-show="turn" :turn="turn"/>
      <Victory v-show="isVictory" :turn="turn"/>
      <Options/>
      <button @click="restart()" @keyup.enter="restart()">Restart Game</button>
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
  border: 1px solid;
  border-color: #42b983;
  background-color: #fff;
  color: #42b983;
  transition: all 0.15s ease;
  padding: 0.75em 2em;
  outline: none;
  cursor: pointer;
}

button:hover {
  color: #1c7950;
  border-color: #1c7950;
}
</style>

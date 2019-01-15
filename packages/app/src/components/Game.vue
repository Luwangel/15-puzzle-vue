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
      <Button @click="restart()">Restart Game</Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Button from "./ui/Button.vue";

import Loading from "./Loading.vue";
import Grid from "./puzzle/Grid.vue";
import Victory from "./Victory.vue";
import Moves from "./Moves.vue";
import Options from "./Options.vue";

export default {
  name: "Game",
  components: {
    Button,
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
</style>

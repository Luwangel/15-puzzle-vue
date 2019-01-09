<template>
  <div class="board">
    <h1 class="title">{{ msg }}</h1>
    <Loading v-if="loading"/>
    <Grid/>
    <Moves v-if="myGame"/>
    <Victory v-if="myGame"/>
    <div>
      <button v-on:click="restart()">Restart game</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "./Loading.vue";
import Grid from "./Grid.vue";
import Victory from "./Victory.vue";
import Moves from "./Moves.vue";

export const getMovesLevel = moves => {
  if (moves === 0) return 0;
  if (moves < 50) return 3;
  if (moves > 100) return 1;

  return 2;
};

export default {
  name: "Game",
  props: {
    msg: String
  },
  components: {
    Loading,
    Grid,
    Victory,
    Moves
  },
  computed: mapState({
    myGame: state => state.games.myGame,
    loading: state => state.games.loading
  }),
  created() {
    this.$store.dispatch("games/buildInitialGame");
  },
  methods: {
    restart() {
      this.$store.dispatch("games/buildInitialGame");
    }
  }
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.title {
  margin: 20px auto;
}

button {
  border-radius: 6px;
  background-color: #42b983;
  color: #35495e;
  padding: 10px;
  outline: none;
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

<template>
  <h1 :class="getMovesClass(moves)">{{ getMovesText(moves) }}</h1>
</template>

<script>
import { mapState } from "vuex";
import { getMovesLevel } from "./Game.vue";

const movesClasses = {
  0: "moves-start",
  1: "moves-bad",
  2: "moves-normal",
  3: "moves-good"
};

export default {
  name: "Moves",
  props: {
    msg: String
  },
  computed: mapState({
    moves: state => state.games.myGame.turn
  }),
  methods: {
    getMovesText(moves) {
      return `${moves} move${moves > 1 ? "s" : ""}`;
    },
    getMovesClass(moves) {
      return movesClasses[getMovesLevel(moves)];
    }
  }
};
</script>

<style scoped>
.moves-start {
  color: inherit;
}

.moves-bad {
  color: red;
}

.moves-normal {
  color: rgb(209, 176, 68);
}

.moves-good {
  color: rgb(64, 202, 59);
}
</style>

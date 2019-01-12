<template>
  <h1 :class="getMovesClass(moves)">{{ getMovesText(moves) }}</h1>
</template>

<script>
import { mapState } from "vuex";
import { byMoves } from "../../../core/src/levels";

const movesClasses = {
  0: "moves-start",
  4: "moves-bad",
  3: "moves-normal",
  2: "moves-good",
  1: "moves-perfect"
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
      return movesClasses[byMoves(moves)];
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

.moves-perfect {
  color: rgb(64, 202, 59);
}
</style>

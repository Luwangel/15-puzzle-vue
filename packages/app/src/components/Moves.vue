<template>
  <h1 :class="classes">{{ label }}</h1>
</template>

<script>
import {
  GOLD,
  SILVER,
  BRONZE,
  NOT_RANKED,
  levelByMoves
} from "../../../core/src/levels";

export default {
  name: "Moves",
  props: {
    turn: Number
  },
  computed: {
    label() {
      return `${this.turn} move${this.turn > 1 ? "s" : ""}`;
    },
    classes() {
      const level = levelByMoves(this.turn);
      return {
        "moves-start": level === NOT_RANKED,
        "moves-bad": level === NOT_RANKED,
        "moves-normal": level === BRONZE,
        "moves-good": level === SILVER,
        "moves-perfect": level === GOLD
      };
    }
  }
};
</script>

<style scoped>
.moves-start {
  color: inherit;
}

.moves-bad {
  color: #d40101;
}

.moves-normal {
  color: #ff9120;
}

.moves-good {
  color: #42b983;
}

.moves-perfect {
  color: #40ca3b;
}
</style>

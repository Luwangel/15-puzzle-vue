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

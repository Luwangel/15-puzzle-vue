<template>
  <div>
    <span :class="classes">{{ label }}</span>
  </div>
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
      switch (this.turn) {
        case 0:
          return "Start the game by clicking on a tile";
        case 1:
          return `${this.turn} move`;
        default:
          return `${this.turn} moves`;
      }
    },
    classes() {
      const level = levelByMoves(this.turn);
      return {
        start: level === NOT_RANKED,
        bad: level === NOT_RANKED,
        normal: level === BRONZE,
        good: level === SILVER,
        perfect: level === GOLD
      };
    }
  }
};
</script>

<style scoped>
div {
  padding: 10px 0;
}

span {
  font-size: 1.1rem;
}

.start {
  color: inherit;
}

.bad {
  color: #d40101;
}

.normal {
  color: #ff9120;
}

.good {
  color: #42b983;
}

.perfect {
  color: #40ca3b;
}
</style>

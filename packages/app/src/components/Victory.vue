<template>
  <h1 class="victory">{{ victoryTextByLevel }}</h1>
</template>

<script>
import {
  GOLD,
  SILVER,
  BRONZE,
  NOT_RANKED,
  levelByMoves
} from "../../../core/src/levels";

const victorySentences = {
  [GOLD]: "Congrats, you are now the 15 Puzzle master!",
  [SILVER]: "You are a champion!",
  [BRONZE]: "Bravo, You played well.",
  [NOT_RANKED]: "You finally finished"
};

export default {
  name: "Victory",
  props: {
    turn: Number
  },
  computed: {
    victoryTextByLevel() {
      return `Victory! ${victorySentences[levelByMoves(this.turn)]}`;
    }
  }
};
</script>

<style scoped>
.victory {
  color: #42b983;
}
</style>

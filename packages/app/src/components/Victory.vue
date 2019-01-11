<template>
  <h1 class="victory">{{ getVictoryText(isVictory, moves)}}</h1>
</template>

<script>
import { mapState } from "vuex";
import { getMovesLevel } from "./Game.vue";

const victorySentences = {
  0: "",
  1: "You finally finished",
  2: "You win!",
  3: "You are a champion!!"
};

export default {
  name: "Victory",
  computed: mapState({
    isVictory: state => state.games.myGame.isVictory,
    moves: state => state.games.myGame.turn
  }),
  methods: {
    getVictoryText(isVictory, moves) {
      if (!isVictory) return "";
      return `Victory! ${victorySentences[getMovesLevel(moves)]}`;
    }
  }
};
</script>

<style scoped>
.victory {
  color: rgb(64, 202, 59);
}
</style>

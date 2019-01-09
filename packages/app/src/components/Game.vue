<template>
  <div class="board">
    <h1 class="title">{{ msg }}</h1>
    <div class="grid" v-if="myGame">
      <span class="row" v-for="(row, index) in myGame.currentGrid" :key="index">
        <span
          :class="getTileClass(tile)"
          v-for="tile in row"
          :key="tile"
          v-on:click="moveTile(tile)"
        >{{ tile }}</span>
      </span>
    </div>
    <h1 :class="getMovesClass(myGame.turn)">{{ getMovesText(myGame.turn) }}</h1>
    <h1 class="victory">{{ getVictoryText(myGame.isVictory, myGame.turn)}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

const getMovesLevel = moves => {
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
  computed: mapState({
    myGame: state => state.games.myGame
  }),
  created() {
    this.$store.dispatch("games/buildInitialGame");
  },
  methods: {
    getTileClass(tile) {
      return `tile ${tile === 0 ? "tile-empty" : "tile-occupied"}`;
    },
    getMovesText(moves) {
      return `${moves} move${moves > 1 ? "s" : ""}`;
    },
    getMovesClass(moves) {
      const level = getMovesLevel(moves);
      switch (level) {
        case 0:
          return "moves-start";
        case 1:
          return "moves-bad";
        case 3:
          return "moves-good";
        default:
          return "moves-normal";
      }
    },
    getVictoryText(isVictory, moves) {
      if (!isVictory) return "";
      const yeah = "Victory!";
      const level = getMovesLevel(moves);
      switch (level) {
        case 1:
          return `${yeah} You finally finished.`;
        case 2:
          return `${yeah} You win!`;
        case 3:
          return `${yeah} You are a champion!!`;
        default:
          return yeah;
      }
    },
    moveTile(tile) {
      if (tile) this.$store.dispatch("games/moveTile", tile);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.board {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.title {
  margin: 20px auto;
}

.grid {
  margin: auto;
}

.row {
  display: table-row;
}

.tile {
  height: 40px;
  line-height: 40px;
  width: 40px;
  display: table-cell;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 6px;
  user-select: none;
}

.tile-empty {
  background-color: white;
  color: white;
}

.tile-occupied {
  background-color: #42b983;
}

.tile-occupied:hover {
  background-color: #76e4b2;
}

.tile-occupied:active {
  background-color: #1c7950;
  border-color: black;
}

.moves-start {
  color: black;
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

.victory {
  color: rgb(64, 202, 59);
}
</style>

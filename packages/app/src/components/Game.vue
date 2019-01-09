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
  </div>
</template>

<script>
import { mapState } from "vuex";

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
    moveTile(tile) {
      console.log(`tileClick ${tile}`);
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
</style>

<template>
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
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Grid",
  computed: mapState({
    myGame: state => state.games.myGame
  }),
  methods: {
    getTileClass(tile) {
      return `tile ${tile === 0 ? "tile-empty" : "tile-occupied"}`;
    },
    moveTile(tile) {
      if (tile) this.$store.dispatch("games/moveTile", tile);
    }
  }
};
</script>

<style scoped>
.grid {
  margin: auto;
  height: 200px;
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

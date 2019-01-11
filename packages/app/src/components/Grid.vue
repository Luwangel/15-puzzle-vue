<template>
  <div class="grid" v-if="myGame">
    <span class="row" v-for="(row, index) in myGame.currentGrid" :key="index">
      <div :class="getTileClass(tile)" v-for="tile in row" :key="tile" @click="moveTile(tile)">
        <img
          v-if="tile!==0 && showPicture"
          :class="getImageClass(tile)"
          :alt="`tile ${tile}`"
          src="../assets/panda_200.jpg"
        >
        <span class="tile-text" v-if="showNumbers">{{tile}}</span>
      </div>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Grid",
  computed: mapState({
    myGame: state => state.games.myGame,
    showNumbers: state => state.games.showNumbers,
    showPicture: state => state.games.showPicture
  }),
  methods: {
    getTileClass(tile) {
      return `tile ${tile === 0 ? "tile-empty" : "tile-occupied"}`;
    },
    moveTile(tile) {
      if (tile) this.$store.dispatch("games/moveTile", tile);
    },
    getImageClass(tile) {
      return `picture picture${tile}`;
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
  position: relative;
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

.tile-text {
  height: 40px;
  line-height: 40px;
  width: 40px;
  position: relative;
}

.tile-empty {
  background-color: white;
  color: white;
}

.tile-occupied {
  background-color: #42b983;
  cursor: pointer;
}

.tile-occupied:hover {
  background-color: #76e4b2;
}

.tile-occupied:active {
  background-color: #1c7950;
  border-color: black;
}

.picture {
  position: absolute;
}

.picture1 {
  clip: rect(0px, 40px, 40px, 0px);
  left: 0px;
}

.picture2 {
  clip: rect(0px, 80px, 40px, 40px);
  left: -40px;
}

.picture3 {
  clip: rect(0px, 120px, 40px, 80px);
  left: -80px;
}

.picture4 {
  clip: rect(0px, 160px, 40px, 120px);
  left: -120px;
}

.picture5 {
  clip: rect(40px, 40px, 80px, 0px);
  left: 0px;
  top: -40px;
}

.picture6 {
  clip: rect(40px, 80px, 80px, 40px);
  left: -40px;
  top: -40px;
}

.picture7 {
  clip: rect(40px, 120px, 80px, 80px);
  left: -80px;
  top: -40px;
}

.picture8 {
  clip: rect(40px, 160px, 80px, 120px);
  left: -120px;
  top: -40px;
}

.picture9 {
  clip: rect(80px, 40px, 120px, 0px);
  left: 0px;
  top: -80px;
}

.picture10 {
  clip: rect(80px, 80px, 120px, 40px);
  left: -40px;
  top: -80px;
}

.picture11 {
  clip: rect(80px, 120px, 120px, 80px);
  left: -80px;
  top: -80px;
}

.picture12 {
  clip: rect(80px, 160px, 120px, 120px);
  left: -120px;
  top: -80px;
}

.picture13 {
  clip: rect(120px, 40px, 160px, 0px);
  left: 0px;
  top: -120px;
}

.picture14 {
  clip: rect(120px, 80px, 160px, 40px);
  left: -40px;
  top: -120px;
}

.picture15 {
  clip: rect(120px, 120px, 160px, 80px);
  left: -80px;
  top: -120px;
}
</style>

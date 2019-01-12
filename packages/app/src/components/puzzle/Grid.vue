<template>
  <div class="grid" v-if="myGame">
    <span class="row" v-for="(row, index) in myGame.currentGrid" :key="index">
      <TileEmpty v-if="index === 0"/>
      <Tile
        v-else
        :number="index"
        @click="moveTile(index)"
        :backgroundStyle="buildBackground(index)"
        :dimensionStyle="myGame.dimensionStyle"
      />
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Tile from "./Tile.vue";
import TileEmpty from "./TileEmpty.vue";

import { buildResponsiveBackground } from "../../../../core/src/picture";

export default {
  name: "Grid",
  components: {
    Tile,
    TileEmpty
  },
  computed: {
    ...mapState({
      myGame: state => state.games.myGame
    })
  },
  methods: {
    ...mapActions({
      moveTile: "games/moveTile"
    }),
    buildBackground(tile) {
      return buildResponsiveBackground(
        false,
        this.myGame.size,
        this.myGame.imageCoords[tile],
        this.myGame.tileSize
      );
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
</style>

<template>
  <div class="puzzle-grid" v-if="myGame">
    <span class="flex" v-for="(row, rowIndex) in myGame.currentGrid" :key="rowIndex">
      <span class="flex" v-for="tile in row" :key="tile">
        <TileEmpty v-if="tile === 0" :dimensionStyle="myGame.dimensionStyle"/>
        <Tile
          v-else
          :number="tile"
          :showNumber="showNumbers"
          @click.prevent.native="moveTile(tile)"
          :backgroundStyle="buildBackground(tile)"
          :dimensionStyle="myGame.dimensionStyle"
        />
      </span>
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
      myGame: state => state.games.myGame,
      showNumbers: state => state.games.showNumbers
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
.flex {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>

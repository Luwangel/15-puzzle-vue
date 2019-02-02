<script>
import { mapState } from "vuex";

export default {
  name: "Tile",
  props: {
    number: Number,
    showNumber: Boolean,
    backgroundStyle: Object,
    dimensionStyle: Object,
    clickable: Boolean
  },
  computed: {
    ...mapState({
      image: state => state.settings.picture
    }),
    classes() {
      return {
        "puzzle-tile": true,
        "puzzle-tile-clickable": this.clickable
      };
    }
  }
};
</script>

<template>
  <div :class="classes" :style="[backgroundStyle, dimensionStyle, { backgroundImage: image }]">
    <span v-if="showNumber" class="puzzle-tile-number">{{number}}</span>
  </div>
</template>

<style scoped>
.puzzle-tile {
  user-select: none;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #40ca65;
  border-radius: 4px;
}

.puzzle-tile-clickable {
  cursor: pointer;
}

.puzzle-tile-clickable:hover {
  filter: brightness(90%);
}

.puzzle-tile-number {
  font-size: 20px;
  color: #42b983;
  text-align: center;
}
</style>

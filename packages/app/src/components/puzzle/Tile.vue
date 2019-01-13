<template>
  <div :class="classes" :style="[backgroundStyle, dimensionStyle]">
    <span v-if="showNumber" class="puzzle-tile-number">{{number}}</span>
  </div>
</template>

<script>
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
    classes() {
      return {
        "puzzle-tile": true,
        "puzzle-tile-clickable": this.clickable
      };
    }
  }
};
</script>

<style scoped>
.puzzle-tile {
  user-select: none;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url("../../assets/panda.jpg");
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

<template>
  <div class="puzzle-tile" :style="[backgroundStyle, dimensionStyle]">
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
    dimensionStyle: Object
  }
};
</script>

<style scoped>
.puzzle-tile {
  cursor: pointer;
  user-select: none;
  background-image: url("../../assets/panda.jpg");
  background-color: #42b983;
  border-radius: 4px;
  position: relative;
}

.puzzle-tile:hover {
  background-color: #76e4b2;
}

.puzzle-tile-number {
  color: #fff;
  text-align: center;
}
</style>

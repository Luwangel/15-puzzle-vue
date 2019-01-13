<template>
  <div class="puzzle-tile" :style="[dimensionStyle]"></div>
</template>

<script>
export default {
  name: "TileEmpty",
  props: {
    dimensionStyle: Object
  }
};
</script>

<style scoped>
.puzzle-tile {
  user-select: none;
  border-radius: 4px;
}
</style>

<template>
  <div class="puzzle-tile"></div>
</template>

<script>
export default {
  name: "TileEmpty"
};
</script>

<style scoped>
.puzzle-tile {
  cursor: pointer;
  user-select: none;
  background-color: #42b983;
  border-radius: 4px;
  position: relative;
  display: table-cell;
}
</style>

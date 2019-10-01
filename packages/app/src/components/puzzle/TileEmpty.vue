<script>
export default {
    name: 'TileEmpty',
    props: {
        dimensionStyle: Object,
    },
};
</script>

<template>
    <div class="puzzle-tile" :style="[dimensionStyle]"></div>
</template>

<style scoped>
.puzzle-tile {
    user-select: none;
    border-radius: 4px;
}
</style>

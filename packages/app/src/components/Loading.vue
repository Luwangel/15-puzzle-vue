<script>
export default {
    name: 'Loading',
};
</script>

<template>
    <img class="loading" alt="Loading..." src="../assets/images/loading.gif" />
</template>

<style scoped>
.loading {
    height: 75%;
    min-height: 200px;
    width: 75%;
    min-width: 200px;
    transform: rotate(-45deg);
}
</style>

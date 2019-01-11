
<template>
  <div id="loading">
    <img class="loading" alt="loading" src="../assets/loading.gif">
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style scoped>
#loading {
  position: absolute;
  height: 200px;
  line-height: 200px;
  width: 100%;
  margin: auto;
  top: 120px;
}

img.loading {
  height: 200px;
}
</style>

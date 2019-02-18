<script>
export default {
  name: "MyFooter"
};
</script>

<template>
  <footer>
    <div class="container">
      <slot/>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-items: center;

  padding: 5px;
  height: 50px;
  min-height: 50px;
  width: calc(100% - 10px);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: calc(100%);
}
</style>

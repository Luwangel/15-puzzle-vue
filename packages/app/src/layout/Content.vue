
<template>
  <div id="content">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="15 Puzzle Game"/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "content",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
#content {
  margin-top: 60px;
}
</style>

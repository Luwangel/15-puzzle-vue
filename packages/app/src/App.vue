<template>
  <div id="#app">
    <Menu/>
    <Content/>
  </div>
</template>

<script>
import Menu from "./layout/Menu.vue";
import Content from "./layout/Content.vue";

export default {
  name: "App",
  components: {
    Menu,
    Content
  }
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100%;

  background-color: #fff;
  color: #2c3e52;
}
</style>

<style src="./assets/normalize.css"></style>

<script>
import Menu from "./layout/Menu.vue";
import Content from "./layout/Content.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "App",
  components: {
    Menu,
    Content,
    Footer
  }
};
</script>

<template>
  <div id="#app">
    <Menu/>
    <Content/>
  </div>
</template>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #fff;
  color: #2c3e52;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  font-size: 1rem;
}
</style>

<style src="./assets/styles/normalize.css"></style>

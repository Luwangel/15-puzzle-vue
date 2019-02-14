<script>
import Header from "./layout/Header.vue";
import Menu from "./layout/Menu.vue";
import Content from "./layout/Content.vue";
import Footer from "./layout/Footer.vue";

import Game from "./components/puzzle/Game.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
    Footer,
    Game
  },
  date() {
    return {
      title: "Play the 15 Puzzle Game"
    };
  }
};
</script>

<template>
  <div id="#app">
    <Header>
      <template v-slot:logo>
        <img class="logo-img" alt="Vue logo" src="./assets/images/logo.svg">
        <span class="logo-label">{{title}}</span>
      </template>
      <template v-slot:menu>
        <Menu/>
      </template>
    </Header>
    <Content>
      <Game/>
    </Content>
    <Footer>My Footer</Footer>
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

.logo-img {
  margin: 0 10px;
  width: 30px;
  height: 30px;
}

.logo-label {
  font-size: 1em;
  line-height: 1em;
  color: #2c3e50;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
}
</style>

<style src="./assets/styles/normalize.css"></style>

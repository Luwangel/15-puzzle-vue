<template>
  <header>
    <div class="container">
      <div class="logo">
        <img alt="Vue logo" src="../assets/logo.png">
        <span>{{title}}</span>
      </div>
      <div class="menu">
        <Button class="menu-button" @click="restart()" :disabled="loading">Restart Game</Button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Button from "../components/ui/Button";

export default {
  name: "MyMenu",
  props: {
    title: { type: String, default: "Play the 15 Puzzle Game" }
  },
  components: {
    Button
  },
  computed: {
    ...mapState({
      loading: state => state.games.loading
    })
  },
  methods: {
    ...mapActions({
      restart: "games/buildInitialGame"
    })
  }
};
</script>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  min-height: 50px;
  width: calc(100%);
  min-width: calc(400px);
  z-index: 100;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px;
  height: 100%;
  width: calc(100%);
}

@media screen and (min-width: 600px) {
  .container {
    padding: 5px 5%;
  }
}

.menu-button {
  padding: 0.5em 1em;
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo > img {
  margin: 0 10px;
  width: 30px;
  height: 30px;
}

.logo > span {
  font-size: 1em;
  line-height: 1em;
  color: #2c3e50;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
}
</style>

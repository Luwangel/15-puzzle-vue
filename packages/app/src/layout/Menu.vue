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
    }),
    restartButtonText() {
      if (this.loading) {
        return "Loading...";
      }
      return "Restart Game";
    }
  },
  methods: {
    ...mapActions({
      restart: "games/create"
    })
  }
};
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img alt="Vue logo" src="../assets/images/logo.svg">
        <span>{{title}}</span>
      </div>
      <div class="menu">
        <Button class="menu-button" @click="restart()" :disabled="loading">{{restartButtonText}}</Button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  padding: 5px;
  height: 50px;
  min-height: 50px;
  width: calc(100% - 10px);

  z-index: 100;
}

@media screen and (min-width: 600px) {
  header {
    padding: 5px 15px;
    width: calc(100% - 30px);
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: calc(100%);
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

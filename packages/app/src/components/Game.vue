<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="myGame">
      <span class="row" v-for="(row, index) in myGame.currentGrid" :key="index">
        <span class="tile" v-for="tile in row" :key="tile">{{ tile }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Game",
  props: {
    msg: String
  },
  computed: mapState({
    myGame: state => state.games.myGame
  }),
  created() {
    this.$store.dispatch("games/buildInitialGame");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

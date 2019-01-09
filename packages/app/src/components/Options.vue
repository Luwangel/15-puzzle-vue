<template>
  <div>
    <label>
      <input type="checkbox" id="numbers" v-on:change="setShowNumbers">Show numbers
    </label>
    <label>
      <input type="checkbox" id="picture" checked v-on:change="setShowPicture">Show the picture
    </label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Options",
  computed: mapState({
    showNumbers: state => state.games.showNumbers,
    showPicture: state => state.games.showPicture
  }),
  methods: {
    setShowNumbers(param) {
      this.$store.dispatch("games/setShowNumbers");
    },
    setShowPicture(param) {
      this.$store.dispatch("games/setShowPicture");
    }
  }
};
</script>

<style scoped>
input {
  margin: 20px 10px 20px 30px;
}
</style>

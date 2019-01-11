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
import { mapState, mapActions } from "vuex";

export default {
  name: "Options",
  computed: mapState({
    showNumbers: state => state.games.showNumbers,
    showPicture: state => state.games.showPicture
  }),
  methods: {
    ...mapActions({
      setShowNumbers: "games/setShowNumbers",
      setShowPicture: "games/setShowPicture"
    })
  }
};
</script>

<style scoped>
input {
  margin: 20px 10px 20px 30px;
}
</style>

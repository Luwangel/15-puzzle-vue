<template>
  <div>
    <Checkbox @change="setShowNumbers" :checked="showNumbers" label="Show numbers"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Checkbox from "../ui/Checkbox.vue";

export default {
  name: "Options",
  components: {
    Checkbox
  },
  computed: {
    ...mapState({
      showNumbers: state => state.games.myGame.showNumbers
    })
  },
  methods: {
    ...mapActions({
      setShowNumbers: "games/setShowNumbers"
    })
  }
};
</script>

<style scoped>
input {
  margin: 20px 10px 20px 30px;
}
</style>

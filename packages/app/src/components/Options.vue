<template>
  <div>
    <label>
      <input type="checkbox" id="numbers" @change="setShowNumbers">Show numbers
    </label>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Options",
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

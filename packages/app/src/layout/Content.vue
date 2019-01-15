
<template>
  <div id="content">
    <Game/>
  </div>
</template>

<script>
import Game from "../components/Game.vue";

export default {
  name: "Content",
  components: {
    Game
  }
};
</script>

<style scoped>
#content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  height: 100%;
  margin-top: 80px;
}
</style>

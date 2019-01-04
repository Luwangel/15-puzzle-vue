
<template>
  <div id="content">
    <Game msg="15 Puzzle Game"/>
  </div>
</template>

<script>
import Game from "../components/Game.vue";

export default {
  name: "MyContent",
  components: {
    Game
  }
};
</script>

<style scoped>
#content {
  margin-top: 60px;
}
</style>

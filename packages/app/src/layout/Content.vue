<script>
import Game from "../components/puzzle/Game.vue";

export default {
  name: "MyContent",
  components: {
    Game
  }
};
</script>

<template>
  <main>
    <Game/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  padding: 5px;
  height: 100%;
  min-height: 100%;
  margin-top: 80px;
  width: calc(100% - 10px);
}

@media screen and (min-width: 600px) {
  main {
    padding: 5px 15px;
    width: calc(100% - 30px);
  }
}
</style>

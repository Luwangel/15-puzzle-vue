
<template>
  <main id="content">
    <Game/>
  </main>
</template>

<script>
import Game from "../components/puzzle/Game.vue";

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
  min-height: 100%;
  margin-top: 80px;
  padding: 5px;
}

@media screen and (min-width: 600px) {
  #content {
    padding: 5px 5%;
  }
}
</style>

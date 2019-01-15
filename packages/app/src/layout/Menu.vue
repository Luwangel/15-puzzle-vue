<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png">
      <span>{{title}}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyMenu",
  props: {
    title: { type: String, default: "Play the 15 Puzzle Game" }
  }
};
</script>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  height: 50px;
  width: calc(100%);
  z-index: 100;
}

header > div {
  padding: 5px 60px;
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo > img {
  margin: 0 10px;
  width: 40px;
  height: 40px;
}

.logo > span {
  font-size: 1.5em;
  line-height: 40px;
  color: #2c3e50;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
}
</style>

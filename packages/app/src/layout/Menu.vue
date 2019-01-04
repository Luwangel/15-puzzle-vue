<template>
  <nav>
    <p>Title</p>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    title: String
  }
};
</script>

<style>
nav {
  background-color: #fff;
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  padding: 10px 60px;
  z-index: 100;
}
</style>

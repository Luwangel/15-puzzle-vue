<template>
  <button @click="$emit('click')" @keyup.enter="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style scoped>
button {
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid;
  border-color: #42b983;
  background-color: #fff;
  color: #42b983;
  transition: all 0.15s ease;
  padding: 0.75em 2em;
  outline: none;
}

button:hover {
  color: #1c7950;
  border-color: #1c7950;
}
</style>

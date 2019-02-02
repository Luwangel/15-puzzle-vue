<script>
export default {
  name: "Button",
  props: {
    disabled: { type: Boolean, default: false }
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.$emit("click");
    }
  }
};
</script>

<template>
  <button @click="handleClick()" @keyup.enter="handleClick()" :class="{ disabled: disabled }">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  color: #42b983;
  background-color: #fff;
  border: 1px solid;
  border-radius: 6px;
  border-color: #42b983;
  transition: all 0.15s ease;
  padding: 0.5em 1em;
  outline: none;
}

button:hover {
  color: #1c7950;
  border-color: #1c7950;
}

button.disabled,
button.disabled:hover {
  cursor: default;
  color: #7f8c8d;
  border-color: #7f8c8d;
}
</style>

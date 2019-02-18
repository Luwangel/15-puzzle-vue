<script>
export default {
  name: "Link",
  props: {
    href: { type: String, default: "" }
  }
};
</script>

<template>
  <a :href="href">
    <slot/>
  </a>
</template>

<style scoped>
a {
  cursor: pointer;
  color: #424fb9;
  transition: all 0.15s ease;
  padding: 0.5em 1em;
  outline: none;
  text-decoration: none;
}

a:hover {
  color: #162473;
  border-color: #162473;
  text-decoration: underline;
}
</style>

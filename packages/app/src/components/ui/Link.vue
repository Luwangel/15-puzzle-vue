<script>
export default {
    name: 'Link',
    props: {
        title: { type: String, default: '' },
        href: { type: String, default: '' },
    },
};
</script>

<template>
    <a :href="href" :title="title">
        <slot />
    </a>
</template>

<style scoped>
a {
    cursor: pointer;
    color: #424fb9;
    transition: all 0.15s ease;
    padding: 0.5em;
    outline: none;
    text-decoration: none;
}

a:hover {
    color: #162473;
    border-color: #162473;
    text-decoration: underline;
}
</style>

<script>
export default {
    name: 'MyContent',
};
</script>

<template>
    <main>
        <slot />
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
    height: calc(80%);
    min-height: 70vh;
    margin: 80px 0 30px 0;
    width: calc(100% - 10px);
}

@media screen and (min-width: 600px) {
    main {
        padding: 5px 15px;
        width: calc(100% - 30px);
    }
}
</style>

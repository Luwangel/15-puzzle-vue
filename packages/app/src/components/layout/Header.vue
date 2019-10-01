<script>
export default {
    name: 'MyHeader',
};
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <slot name="logo" />
            </div>
            <div class="menu">
                <slot name="menu" />
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;

    padding: 5px;
    height: 50px;
    min-height: 50px;
    width: calc(100% - 10px);

    z-index: 100;
}

@media screen and (min-width: 600px) {
    header {
        padding: 5px 15px;
        width: calc(100% - 30px);
    }
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: calc(100%);
}

.logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>

<script>
export default {
    name: 'MyFooter',
};
</script>

<template>
    <footer>
        <div class="container">
            <p class="links">
                <slot name="links" />
            </p>
            <p>
                <slot name="legal" />
            </p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    align-items: center;

    background-color: #f6f6f6;
    min-height: 200px;
}

.container {
    padding: 35px 40px;
    height: 100%;
    width: calc(100% - 10px);
}

p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
}

.links {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>

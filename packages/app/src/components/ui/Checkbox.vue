<script>
export default {
    name: 'Checkbox',
    props: {
        checked: Boolean,
        label: String,
    },
};
</script>

<template>
    <label class="container">
        <span class="label">{{ label }}</span>
        <input
            type="checkbox"
            :checked="checked"
            @change="$emit('change', $event.target.value)"
        />
        <span class="checkmark"></span>
    </label>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    position: relative;
    height: 23px;
    padding-left: 30px;
    cursor: pointer;
    user-select: none;
    transition: all 0.15s ease;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid;
    border-color: #424fb9;
}

.container input:checked ~ .checkmark {
    background-color: #424fb9;
}

.checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.container:hover .checkmark:after {
    display: block;
    color: #424fb9;
}
</style>

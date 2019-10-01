<script>
import { mapState } from 'vuex';

export default {
    name: 'Tile',
    props: {
        number: Number,
        showNumber: Boolean,
        backgroundStyle: Object,
        dimensionStyle: Object,
        clickable: Boolean,
    },
    computed: {
        ...mapState({
            image: state => state.games.picture,
        }),
        classes() {
            return {
                'puzzle-tile': true,
                'puzzle-tile-clickable': this.clickable,
            };
        },
    },
};
</script>

<template>
    <div
        :class="classes"
        :style="[backgroundStyle, dimensionStyle, { backgroundImage: image }]"
    >
        <transition name="fade">
            <span v-if="showNumber" class="puzzle-tile-number">
                {{ number }}
            </span>
        </transition>
    </div>
</template>

<style scoped>
.puzzle-tile {
    user-select: none;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #40ca65;
    border-radius: 4px;
}

.puzzle-tile-clickable {
    cursor: pointer;
}

.puzzle-tile-clickable:hover {
    filter: brightness(90%);
}

.puzzle-tile-number {
    font-size: 1.5em;
    color: #fff;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

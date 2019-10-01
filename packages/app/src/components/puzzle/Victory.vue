<script>
import { mapActions } from 'vuex';

import {
    GOLD,
    SILVER,
    BRONZE,
    NOT_RANKED,
    levelByMoves,
} from '../../../../core/src/levels';
import Button from '../ui/Button';

const victorySentences = {
    [GOLD]: 'Congrats, you are now the 15 Puzzle master!',
    [SILVER]: 'You are a champion!',
    [BRONZE]: 'Bravo, you played well.',
    [NOT_RANKED]: 'You finally finished',
};

export default {
    name: 'Victory',
    props: {
        turn: Number,
    },
    components: {
        Button,
    },
    computed: {
        victoryTextByLevel() {
            return `Victory! ${victorySentences[levelByMoves(this.turn)]}`;
        },
    },
    methods: {
        ...mapActions({
            create: 'games/create',
        }),
    },
};
</script>

<template>
    <div>
        <p class="victory">{{ victoryTextByLevel }}</p>
        <Button class="menu-button" @click="create()">
            Improve your Score
        </Button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0;
}

.victory {
    font-size: 20px;
}
</style>

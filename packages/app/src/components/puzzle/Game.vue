<script>
import { mapState, mapActions } from 'vuex';

import Loading from '../Loading.vue';
import Grid from './Grid.vue';
import Victory from './Victory.vue';
import Moves from './Moves.vue';
import Options from './Options.vue';

export default {
    name: 'Game',
    components: {
        Loading,
        Grid,
        Victory,
        Moves,
        Options,
    },
    computed: {
        ...mapState({
            myGame: state => state.games.myGame,
            turn: state => (state.games.myGame ? state.games.myGame.turn : -1),
            isVictory: state =>
                state.games.myGame && state.games.myGame.isVictory,
            loading: state => state.games.loading,
        }),
    },
    methods: {
        ...mapActions({
            restart: 'games/create',
        }),
    },
    created() {
        if (!this.myGame) {
            this.restart();
        }
    },
};
</script>

<template>
    <div class="board">
        <section v-if="loading">
            <Loading />
        </section>
        <div v-else-if="myGame">
            <section class="game">
                <Grid />
            </section>
            <section class="options">
                <Options />
            </section>
            <section class="infos">
                <Moves :turn="turn" />
                <Victory v-show="isVictory" :turn="turn" />
            </section>
        </div>
    </div>
</template>

<style scoped>
.board {
    display: flex;
    flex-direction: column;
}

section {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.options {
    justify-content: flex-end;
}

.infos {
    flex-direction: column;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';
import Tile from './Tile.vue';
import TileEmpty from './TileEmpty.vue';

import { buildResponsiveBackground } from '../../../../core/src/picture';
import { isTileInMovableTiles } from '../../../../core/src/game';

export default {
    name: 'Grid',
    components: {
        Tile,
        TileEmpty,
    },
    computed: {
        ...mapState({
            myGame: state => state.games.myGame,
            currentGrid: state =>
                state.games.myGame && state.games.myGame.currentGrid,
            isVictory: state =>
                state.games.myGame && state.games.myGame.isVictory,
            showNumbers: state => state.settings.showNumbers,
        }),
    },
    methods: {
        ...mapActions({
            moveTile: 'games/moveTile',
        }),
        buildBackground(tile) {
            return buildResponsiveBackground(
                true,
                this.myGame.size,
                this.myGame.imageCoords[tile],
                this.myGame.tileSize,
            );
        },
        isMovableTile(tile) {
            return (
                !this.isVictory && isTileInMovableTiles(this.currentGrid, tile)
            );
        },
    },
};
</script>

<template>
    <div class="puzzle-grid" v-if="myGame">
        <span
            class="flex"
            v-for="(row, rowIndex) in currentGrid"
            :key="rowIndex"
        >
            <span class="flex" v-for="tile in row" :key="tile">
                <TileEmpty
                    v-if="tile === 0"
                    :dimensionStyle="myGame.dimensionStyle"
                />
                <Tile
                    v-else-if="isMovableTile(tile)"
                    :number="tile"
                    :showNumber="showNumbers"
                    :backgroundStyle="buildBackground(tile)"
                    :dimensionStyle="myGame.dimensionStyle"
                    :clickable="true"
                    @click.prevent.native="moveTile(tile)"
                />
                <Tile
                    v-else
                    :number="tile"
                    :showNumber="showNumbers"
                    :backgroundStyle="buildBackground(tile)"
                    :dimensionStyle="myGame.dimensionStyle"
                    :clickable="false"
                />
            </span>
        </span>
    </div>
</template>

<style scoped>
.puzzle-grid {
    user-select: none;
    touch-action: manipulation;
}

.flex {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>

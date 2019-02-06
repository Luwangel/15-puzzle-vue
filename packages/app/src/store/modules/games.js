import {
    DEFAULT_SIZE,
    associateTileToBackground,
    initGame,
    moveTile,
} from '../../../../core/src';
import { buildResponsiveDimension } from '../../../../core/src/picture';

const state = {
    myGame: null,
    loading: false,
};

const getters = {};

const actions = {
    buildInitialGame(context) {
        context.commit('SET_LOADING', true);
        initGame(DEFAULT_SIZE).then(newGame => {
            newGame.size = DEFAULT_SIZE;

            newGame.imageCoords = associateTileToBackground(
                newGame.resolvedGrid
            );

            const { dimensionStyle, tileSize } = buildResponsiveDimension(
                true,
                newGame.resolvedGrid.length
            );
            newGame.dimensionStyle = dimensionStyle;
            newGame.tileSize = tileSize;

            context.commit('SET_GAME', newGame);
            context.commit('SET_LOADING', false);
        });
    },
    moveTile(context, tile) {
        const myGame = context.state.myGame;
        const newGame = Object.assign({}, myGame, {
            ...moveTile(myGame, tile),
        });
        context.commit('SET_GAME', newGame);
    },
};

const mutations = {
    SET_GAME(state, newGame) {
        state.myGame = newGame;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

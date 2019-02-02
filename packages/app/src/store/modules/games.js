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
        context.commit('setLoading', true);
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

            context.commit('setGame', newGame);
            context.commit('setLoading', false);
        });
    },
    moveTile(context, tile) {
        const myGame = context.state.myGame;
        const newGame = Object.assign({}, myGame, {
            ...moveTile(myGame, tile),
        });
        context.commit('setGame', newGame);
    },
};

const mutations = {
    setGame(state, newGame) {
        state.myGame = newGame;
    },
    setLoading(state, loading) {
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

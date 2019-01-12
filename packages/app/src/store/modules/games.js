import {
    associateTileToBackground,
    initGame,
    moveTile,
} from '../../../../core/src';
import { buildResponsiveDimension } from '../../../../core/picture';

const state = {
    myGame: null,
    loading: false,
    showNumbers: false,
};

const getters = {};

const actions = {
    buildInitialGame(context) {
        context.commit('setLoading', true);
        initGame().then(newGame => {
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
        const currentGame = context.state.myGame;
        const newGame = moveTile(currentGame, tile);
        context.commit('setGame', newGame);
    },
    setShowNumbers(context) {
        context.commit('setShowNumbers', !context.state.showNumbers);
    },
};

const mutations = {
    setGame(state, newGame) {
        state.myGame = newGame;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
    setShowNumbers(state, showNumbers) {
        state.showNumbers = showNumbers;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

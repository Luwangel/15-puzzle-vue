import { initGame, moveTile } from '../../../../core/src';

const state = {
    myGame: null,
    loading: false,
    showNumbers: false,
    showPicture: true,
};

const getters = {};

const actions = {
    buildInitialGame(context) {
        context.commit('setLoading', true);
        initGame().then(newGame => {
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
    setShowPicture(context) {
        context.commit('setShowPicture', !context.state.showPicture);
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
    setShowPicture(state, showPicture) {
        state.showPicture = showPicture;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

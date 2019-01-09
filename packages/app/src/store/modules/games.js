import { initGame, moveTile } from '../../../../core/src';

const state = {
    myGame: null,
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

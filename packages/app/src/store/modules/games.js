import { initGame } from '../../../../core/src';

const state = {
    myGame: null,
};

const getters = {};

const actions = {
    buildInitialGame(context) {
        initGame().then(newGame => {
            context.commit('setGame', newGame);
        });
    },
};

const mutations = {
    setGame(state, newGame) {
        state.myGame = newGame;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

const state = {
    showNumbers: false,
};

const getters = {};

const actions = {
    setShowNumbers(context) {
        context.commit('SET_SHOW_NUMBERS', !context.state.showNumbers);
    },
};

const mutations = {
    SET_SHOW_NUMBERS(state, showNumbers) {
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

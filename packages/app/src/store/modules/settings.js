import panda from '../../assets/images/puzzle/panda.jpg';

const pictures = {
    panda: `url("${panda}")`,
};

const state = {
    showNumbers: false,
    picture: pictures.panda,
};

const getters = {};

const actions = {
    setShowNumbers(context) {
        context.commit('setShowNumbers', !context.state.showNumbers);
    },
};

const mutations = {
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

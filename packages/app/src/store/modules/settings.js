import { choiceInArray } from '../../../../core/src';

import palm from '../../assets/images/puzzle/palm.jpg';
import panda from '../../assets/images/puzzle/panda.jpg';
import strasbourg from '../../assets/images/puzzle/strasbourg.jpg';
import tree from '../../assets/images/puzzle/tree.jpg';
import cabane from '../../assets/images/puzzle/cabane.jpg';

const url = picture => `url("${picture}")`;

const pictures = {
    palm: url(palm),
    panda: url(panda),
    strasbourg: url(strasbourg),
    tree: url(tree),
    cabane: url(cabane),
};

const randomPicture = choiceInArray(Object.keys(pictures));

const state = {
    showNumbers: false,
    picture: pictures[randomPicture],
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

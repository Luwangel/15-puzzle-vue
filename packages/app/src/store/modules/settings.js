import pictures, { getRandomPicture } from '../../pictures';

const state = {
    showNumbers: false,
    picture: pictures.panda,
};

const getters = {};

const actions = {
    setShowNumbers(context) {
        context.commit('SET_SHOW_NUMBERS', !context.state.showNumbers);
    },
    setRandomPicture(context) {
        const newPicture = getRandomPicture();
        context.commit('SET_PICTURE', newPicture);
    },
};

const mutations = {
    SET_SHOW_NUMBERS(state, showNumbers) {
        state.showNumbers = showNumbers;
    },
    SET_PICTURE(state, pictureName) {
        const picture = Object.keys(pictures).find(
            pictureKey => pictureKey === pictureName
        );
        if (!picture) {
            return;
        }
        state.picture = picture;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

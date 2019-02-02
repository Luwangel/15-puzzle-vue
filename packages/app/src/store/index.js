import Vue from 'vue';
import Vuex from 'vuex';

import games from './modules/games';
import settings from './modules/settings';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        games,
        settings,
    },
    strict: debug,
});

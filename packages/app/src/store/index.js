import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import VuexPersist from 'vuex-persist';

import games from './modules/games';
import settings from './modules/settings';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const persist = new VuexPersist({
    storage: window.localStorage,
    reducer: state => ({
        games: { myGame: state.games.myGame, picture: state.games.picture },
        settings: { showNumbers: state.settings.showNumbers },
    }),
});

export default new Store({
    modules: {
        games,
        settings,
    },
    plugins: [persist.plugin],
    strict: debug,
});

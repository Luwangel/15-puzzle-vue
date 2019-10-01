import {
    DEFAULT_SIZE,
    associateTileToBackground,
    initGame,
    moveTile,
} from '../../../../core/src';
import { buildResponsiveDimension } from '../../../../core/src/picture';

import pictures, { getRandomPicture } from '../../pictures';

const state = {
    loading: false,
    myGame: null,
    picture: pictures.panda,
};

const getters = {};

const actions = {
    create(context) {
        context.commit('SET_LOADING', true);
        initGame(DEFAULT_SIZE).then(newGame => {
            newGame.size = DEFAULT_SIZE;

            newGame.imageCoords = associateTileToBackground(
                newGame.resolvedGrid,
            );

            const { dimensionStyle, tileSize } = buildResponsiveDimension(
                true,
                newGame.resolvedGrid.length,
            );
            newGame.dimensionStyle = dimensionStyle;
            newGame.tileSize = tileSize;

            const newPicture = getRandomPicture();

            context.commit('SET_PICTURE', newPicture);
            context.commit('SET_GAME', newGame);
            context.commit('SET_LOADING', false);
        });
    },
    moveTile(context, tile) {
        const myGame = context.state.myGame;
        const newGame = Object.assign({}, myGame, {
            ...moveTile(myGame, tile),
        });
        context.commit('SET_GAME', newGame);
    },
    setRandomPicture(context) {
        const newPicture = getRandomPicture();
        context.commit('SET_PICTURE', newPicture);
    },
};

const mutations = {
    SET_GAME(state, newGame) {
        state.myGame = newGame;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_PICTURE(state, picture) {
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

import { deepCopyGrid, listCoordsMovableTiles, move } from './game';

export const SHUFFLE_DURATION = 2000;
export const SLEEP_DURATION = 1;

export const chooseCoords = coordsList =>
    coordsList[Math.floor(Math.random() * coordsList.length)];

const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));

export const shuffle = async (grid, shuffleDuration = SHUFFLE_DURATION) => {
    let stopShuffling = false;
    let shuffledGrid = deepCopyGrid(grid);

    const startShuffling = async () => {
        while (!stopShuffling) {
            const coords = listCoordsMovableTiles(shuffledGrid);

            shuffledGrid = move(shuffledGrid, chooseCoords(coords));
            await sleep(SLEEP_DURATION);
        }
    };

    return await Promise.race([
        sleep(shuffleDuration).then(() => {
            stopShuffling = true;
            return shuffledGrid;
        }),
        new Promise(() => startShuffling()),
    ]);
};

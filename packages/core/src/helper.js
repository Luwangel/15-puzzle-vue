export const associateTileToBackground = grid => {
    const tileSize = grid.length > 0 ? 100 / grid.length : 0; // 100%

    let tileToBg = {};

    grid.forEach((row, rowKey) => {
        row.forEach((value, colKey) => {
            tileToBg[value] = `${tileSize * colKey}% ${tileSize * rowKey}%`;
        });
    });
    return tileToBg;
};

export const choiceInArray = (list, rand = Math.random()) => {
    if (!Array.isArray(list)) {
        throw Error('The list should be an array');
    }
    if (rand < 0 || rand >= 1) {
        throw Error(
            'The value random number should be a number (0 <= rand < 1)',
        );
    }

    return list[Math.floor(rand * list.length)];
};

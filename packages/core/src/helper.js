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

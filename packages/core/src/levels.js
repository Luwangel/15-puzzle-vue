export const GOLD = 1;
export const SILVER = 2;
export const BRONZE = 3;
export const NOT_RANKED = 4;
export const NOT_STARTED = 5;

export const levelByMoves = moves => {
    if (moves === 0) return NOT_STARTED;
    if (moves < 80) return GOLD;
    if (moves < 120) return SILVER;
    if (moves < 180) return BRONZE;
    return NOT_RANKED;
};

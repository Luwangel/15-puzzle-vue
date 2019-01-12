export const GENIUS = 0;
export const GOLD = 1;
export const SILVER = 2;
export const BRONZE = 3;
export const NOT_RANKED = 4;

export const byMoves = moves => {
    if (moves <= 0) return 0;
    if (moves < 80) return 1;
    if (moves < 120) return 2;
    if (moves < 180) return 3;
    return 4;
};

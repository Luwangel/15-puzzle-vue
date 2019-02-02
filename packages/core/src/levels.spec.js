import * as Levels from './levels';

describe('Levels', () => {
    describe('levelByMoves', () => {
        test('should return GOLD if moves < 80', () => {
            expect(Levels.levelByMoves(79)).toBe(Levels.GOLD);
        });

        test('should return SILVER if moves < 120', () => {
            expect(Levels.levelByMoves(119)).toBe(Levels.SILVER);
        });

        test('should return BRONZE if moves < 180', () => {
            expect(Levels.levelByMoves(179)).toBe(Levels.BRONZE);
        });

        test('should return NOT_RANKED otherwise', () => {
            expect(Levels.levelByMoves(181)).toBe(Levels.NOT_RANKED);
        });
    });
});

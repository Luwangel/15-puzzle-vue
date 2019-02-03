import * as Picture from './picture';

describe('Picture', () => {
    describe('associateTileToBackground', () => {
        test('should build the associations', () => {
            const grid = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 0],
            ];
            const expectedAssociation = {
                1: '0% 0%',
                2: '25% 0%',
                3: '50% 0%',
                4: '75% 0%',
                5: '0% 25%',
                6: '25% 25%',
                7: '50% 25%',
                8: '75% 25%',
                9: '0% 50%',
                10: '25% 50%',
                11: '50% 50%',
                12: '75% 50%',
                13: '0% 75%',
                14: '25% 75%',
                15: '50% 75%',
                0: '75% 75%',
            };
            const association = Picture.associateTileToBackground(grid);

            expect(association).toEqual(expectedAssociation);
        });

        test('should not fail if the grid is empty', () => {
            const grid = [];

            const association = Picture.associateTileToBackground(grid);

            expect(association).toEqual({});
        });
    });
});

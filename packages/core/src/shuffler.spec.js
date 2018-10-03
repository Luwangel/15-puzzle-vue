import * as Shuffler from './shuffler';

describe('Game', () => {
    let randomSpy;

    beforeAll(() => {
        randomSpy = jest.spyOn(global.Math, 'random');
    });

    describe('chooseCoords', () => {
        test('should choice random coords from a list', () => {
            randomSpy.mockImplementationOnce(() => 0.25);

            const coordsList = [
                { y: 1, x: 1 },
                { y: 1, x: 2 },
                { y: 2, x: 1 },
                { y: 2, x: 2 },
            ];

            const expectedCoords = { y: 1, x: 2 };
            const coords = Shuffler.chooseCoords(coordsList);

            expect(coords).toEqual(expectedCoords);
        });
    });

    afterAll(() => {
        randomSpy.restore();
    });
});

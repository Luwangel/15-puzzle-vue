import * as Helper from './helper';

describe('Helper', () => {
    describe('choiceInArray', () => {
        test('should return the first item', () => {
            const list = ['a', 'b', 'c'];
            const item = Helper.choiceInArray(list, 0);

            expect(item).toEqual(list[0]);
        });

        test('should use Math random', () => {
            const spy = jest.spyOn(Math, 'random');

            const list = ['a', 'b', 'c'];

            Helper.choiceInArray(list);
            expect(spy).toHaveBeenCalled();

            spy.mockReset();
            spy.mockRestore();
        });

        test('should throw an error if the rand number is not between 0 and 1', () => {
            const list = ['a', 'b', 'c'];

            expect(() => Helper.choiceInArray(list, 2)).toThrow(
                'The value random number should be a number (0 <= rand < 1)',
            );
        });

        test('should throw an error if the list is not an array', () => {
            const list = {};

            expect(() => Helper.choiceInArray(list, 2)).toThrow(
                'The list should be an array',
            );
        });
    });
});

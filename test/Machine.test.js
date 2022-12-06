const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(actual).toEqual(expected);
    });

    it('should show deposited money', () => {
        // setup
        const machine = new Machine();
        const expected1 = 'you have deposited Rs 10'
        const expected2 = 'you have deposited Rs 20'
        const expected3 = 'you have deposited Rs 50'
        const expected4 = 'you have deposited Rs 100'
        const expected5 = 'you have deposited Rs 500'

        // exercise
        const actual1 = machine.deposit(10);
        const actual2 = machine.deposit(20);
        const actual3 = machine.deposit(50);
        const actual4 = machine.deposit(100);
        const actual5 = machine.deposit(500);

        // assert
        expect(actual1).toEqual(expected1);
        expect(actual2).toEqual(expected2);
        expect(actual3).toEqual(expected3);
        expect(actual4).toEqual(expected4);
        expect(actual5).toEqual(expected5);
    });


});

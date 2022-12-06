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
        const amounts=[10,20,50,100,500]

        for(let i of amounts){
            actual = machine.deposit(i);
            expected= `you have deposited Rs ${i}`
            expect(actual).toEqual(expected);
        }

    
    });

   


});

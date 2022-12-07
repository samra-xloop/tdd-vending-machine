const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350},{}, {'mints': 70}];

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
            //we are assuming that we have used the deposited money before adding more money
            machine.remaining_amount=0
        }

    
    });

    it('show remaining + additional money', () => {
        // setup
        const machine = new Machine();
        machine.deposit(100)

        // exercise
        const actual = machine.deposit(50);
        
        // assert
        expect(actual).toEqual('you have deposited Rs 150');
        });

        it('show message for unavailable Items', () => {
            // setup
            const machine = new Machine();
    
            // exercise
            const actual = machine.selectItem(2);
            
            // assert
            expect(actual).toEqual('The item you selected is unavailable');
            });
        
        

        it('insufficient amount for the item', () => {
            // setup
            const machine = new Machine();
    
            // exercise
            machine.deposit(50)
            const actual = machine.selectItem(0);
            
            // assert
            expect(actual).toEqual('Your deposit is insufficient.  Please add Rs 50 for this item');
            });

   


});

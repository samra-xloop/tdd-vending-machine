class Machine {
    
    constructor() {
        this.listOfItems=[{'crisps': 100}, {'chocolate': 350}, {},{'mints': 70}];
        this.remaining_amount=0
        this.available_codes=this.listOfItems.length
    }


    seeSelections() {
        return this.listOfItems;
    }

    
    
    deposit(amount){
        this.remaining_amount=this.remaining_amount+amount
        return `you have deposited Rs ${this.remaining_amount}`
        
    }
    selectItem(code){ // assuming index of the list as the code for that item if o
        if(Object.keys(this.listOfItems[code]).length === 0){
            return 'The item you selected is unavailable'
        }
        const item_price=this.listOfItems[code][Object.keys(this.listOfItems[code])[0]]
        if(this.remaining_amount < item_price){
            const needed_amount= item_price - this.remaining_amount
            return `Your deposit is insufficient.  Please add Rs ${needed_amount} for this item`
        }
        }
        
        
        
    
    
};

module.exports=Machine

// ob=new Machine
// ob.deposit(50)
// console.log(ob.selectItem(0))

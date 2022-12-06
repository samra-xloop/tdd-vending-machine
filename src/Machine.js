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
    selectItem(code){
        let a = 1; //item available
            if (this.listOfItems[code]=='{}'){
                a = 0;  //not available
            }
                   
        
        
        if (!a){
            return 'The item you selected is unavailable';
        }

        
        
    }
    
};

module.exports=Machine

// ob=new Machine
// console.log(ob.deposit(10))
class Machine {
    
    constructor() {
        this.listOfItems=[{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        this.remaining_amount=0
        this.available_codes=[1,2,3]
    }


    seeSelections() {
        return this.listOfItems;
    }

    
    
    deposit(amount){
        this.remaining_amount=this.remaining_amount+amount
        return `you have deposited Rs ${this.remaining_amount}`
        
    }
    selectItem(code){
        let a = 0;
        for(let i of this.available_codes){
            if (i==code){
                a = 1;
            }
        
            
        }
        
        return a == 0 ? 'The item you selected is unavailable': '';
                 }
    
};

module.exports=Machine

// ob=new Machine
// console.log(ob.deposit(10))
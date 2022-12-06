class Machine {
    
    constructor() {
        this.listOfItems=[{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
        this.remaining_amount=0
    }


    seeSelections() {
        return this.listOfItems;
    }
    addMoney(){

    }
    
    deposit(amount){
        this.remaining_amount=this.remaining_amount+amount
        return `you have deposited Rs ${this.remaining_amount}`
        
    }
};

module.exports=Machine

// ob=new Machine
// console.log(ob.deposit(10))
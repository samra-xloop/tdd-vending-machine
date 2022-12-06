class Machine {
    
    constructor() {
        this.listOfItems=[{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }


    seeSelections() {
        return this.listOfItems;
    }
    deposit(amount){
        switch(amount){
            case 10: return 'you have deposited Rs 10'; 
            break;
            case 20: return 'you have deposited Rs 20'; 
            break;
            case 50: return 'you have deposited Rs 50'; 
            break;
            case 100: return 'you have deposited Rs 100'; 
            break;
            case 500: return 'you have deposited Rs 500'; 
            break;
            default:
                'Please Enter 10 / 20 / 50 / 100 /500'
        }
    }
};

module.exports=Machine

// ob=new Machine
// console.log(ob.deposit(10))
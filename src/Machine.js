module.exports=class Machine {
    
    constructor() {
        this.listOfItems=[{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    }


    seeSelections() {
        return this.listOfItems;
    }
};


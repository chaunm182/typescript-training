class Customer{
    firstName : string;
    lastName : string;

    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("Minh","Châu");
console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);

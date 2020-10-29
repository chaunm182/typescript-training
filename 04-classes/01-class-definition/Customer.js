var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Minh", "Châu");
console.log(myCustomer.firstName + " " + myCustomer.lastName);

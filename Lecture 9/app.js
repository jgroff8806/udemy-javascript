var person = new Object();

person["firstname"] = "Jason";
person["lastname"] = "Groff";

var firstNameProperty = "firstname";

console.log(person);
// console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "123 Sunny Lane";
person.address.city = "Kansas City";
person.address.state = "Missouri";
person.address.zip = "64029";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);
console.log(person["address"]["zip"]);

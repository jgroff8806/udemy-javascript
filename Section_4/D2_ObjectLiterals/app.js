// Object and Object Literals

// Object Literal Syntax
var Jason = {
  firstname: "Jason",
  lastname: "Groff",
  address: {
    street: "123 Sunny Lane",
    city: "Kansas City",
    state: "Missouri"
  }
};

function greet(person) {
  console.log("Hi " + person.firstname);
}

greet(Jason);

greet({
  firstname: "John",
  lastname: "Doe"
});

Jason.address2 = {
  street: "123 Second St.";
}

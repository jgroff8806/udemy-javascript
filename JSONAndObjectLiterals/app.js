var objectLiteral = {
  firstname: "Jason",
  isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral));

// JSON requires quotes around names, such as "firstname"
var jsonValue = JSON.parse('{ "firstname": "Jason", "isAProgrammer": true }');

console.log(jsonValue);

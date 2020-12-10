// define the json file you're working with
const data = require("./exampledata.json");

// grabbing data from the json file
let bill = data.people.bill;
console.log(bill.name);
console.log(`${bill.pets[0].name}`);
console.log(`${bill.pets[1].name}`);

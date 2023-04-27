// Write your solution in this file!
// Declare global variable
var customerName = 'bob';

// Write function to modify and return customerName in uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

// Write function to declare and modify a global variable
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write function to overwrite the global variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Write function to attempt to modify the constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw a TypeError because you can't modify a constant
}
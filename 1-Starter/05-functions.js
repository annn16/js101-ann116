/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

let order1;
let order2;
let order3;

order1 = calculateTotal(10, 20);
order2 = calculateTotal(40, 50);
order3 = calculateTotal(30, 70);

console.log(order1, order2, order3);

const calculateTotal1 = function (subTotal, tax) {
  return subTotal + tax;
};

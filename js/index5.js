


const data = {
  name: "sheob",
  "className": "python"
};
// console.log(data)

const { name, className } = data;

// (transactions.map((transaction) => console.log(transaction)))

//map
//filter
//reduce
//some




// console.log(totalCount)

// let multi2Arr = []
// for (let i = 0; i < numbersArray.length; i++) {
//   let multi2 = numbersArray[i] * 2
//   multi2Arr.push(multi2)
// }
// console.log(numbersArray)

const numbersArray = [10, 20, 30, 40, 90, 30, 550]

const totalCount = numbersArray.reduce((a, c) => a + c, 0)

const multiply2Arr = numbersArray.map((num, idx, arr) => num * 2)
console.log(multiply2Arr)


const numberBelow50 = numbersArray.filter((number) => number <= 50).map((el) => el * 4)
console.log(numberBelow50)
function newFunction(el, idx, arr) {
  return [el, idx, arr]
}



function CapsLetter(str) {
  return str.split(" ").map((word) => word.at(0).toUpperCase() + word.slice(1)).join(" ");
}

const transactions = [
  { id: 1, amount: 500, status: 'completed' }, // > a
  { id: 2, amount: 200, status: 'pending' }, // > b
  { id: 3, amount: 1500, status: 'completed' },
  { id: 4, amount: 300, status: 'failed' }
];


// sort() ->  array
// sort((a,b)=>a-b) ->ascending

// transactions[] => {}object.amount


const amountAscendingArray = transactions.sort((a, b) => a.amount - b.amount).filter((transaction) => transaction.amount <= 500 && transaction.status === "completed")

const TotalAmount = transactions.reduce((acc, currTransaction) => acc + currTransaction.amount, 0)
const avg = TotalAmount / transactions.length
console.log(avg)

console.log(amountAscendingArray)


const products = [
  { id: 1, cost: 20 },
  { id: 2, cost: 50 },
  { id: 3, cost: 10 }
];
const result = products
  .filter(p => p.cost > 15)
  .map(p => p.cost)
  .sort((a, b) => b - a);

console.log(result)

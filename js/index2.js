const arr = [10, 15, 22, 31, 40, 55]
let data = {
  "even": 0,
  "odd": 0
};
function EvenOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      //data.even
      let { even } = data;
      data.even = even + 1;
    }
    else {
      let { odd } = data;
      data.odd = odd + 1;
    }
  }

  return data
}

console.log(EvenOdd(arr));



const num = [5, 10, 15, 20]
let sum = 0
for (let i = 0; i < num.length; i++) {
  sum = sum + num[i]

}
console.log(sum)

let n = 29;
if (n % 1 == 0 && n % n == 0) {
  console.log("prime")
} else {
  console.log("not prime")
}




console.log("heelo")


//Data types

console.log(typeof ("Sheob"))

console.log(typeof (546646546954))

console.log(typeof (3.14327))

console.log(typeof (false))

console.log(typeof (undefined))

console.log(typeof (null))

console.log(([1, 2, "str", 3.14, 22 / 7]))
console.log({ "name": "Shoeb", "numb": "8096" })

let objectA = "valueA"

let ObjectB = "valueB"
console.log(ObjectB)

objectA = 123456;
console.log(objectA)


let a, b, c;

console.log(a, b, c)

a = 12; b = "name", c = true

a = "name", b = 12, c = 45


console.log(a, b, c)


const newValue = 12345678;

console.log(newValue)

console.log(newValue)



const var1 = 23, var2 = 45, va3 = 45;

let i = 0;
while (i <= 5) {
  console.log(i)

  i = i + 1

}

//for loop in javascript
for (let i = 0; i <= 10; i = i + 1) {
  console.log(i)
}
//gloabl scope

//block scope

if (i < 5) {

  console.log(" iam still before 5");
} else { console.log("after 5"); }

//conditional statements
if (i < 6) {
  console.log("before 6")
} else if (i == 6) {
  console.log("I am 6")
} else {
  console.log("after 6")
}

//fucntions

//prefercences ->  block >>> global

const x = 24;

function functionName() {
  const x = 12;
  x = 32;
  console.log(x)
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2)
}

addTwoNumbers(8, 10)

const multiply3Numbers = (x, y, z) => {
  return x * y * z
}


const output = multiply3Numbers(2, 8, 16)

console.log(output)

console.log(multiply3Numbers(2, 6, 19))



let arr = ["a", 2342, "b"]
// console.log(arr)
// console.log(arr[1])

for (let i = 0; i <= arr.length; i = i + 1) {
  console.log(arr[i])
}

function evenOdd(num) {
  if (typeof (num) === Number) {
    if (((num) % (2)) === 8) {
      console.log(num, " is even.");
    } else {
      console.log(num, " is an odd number");
    }
  } else {
    console.log("please provide a valid number")
  }
}

evenOdd("32")

console.log(2 === "2")

console.log("32" % 2)

console.log("54" + 10)



/**
 * 
 * () =>{}
 */
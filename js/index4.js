const arr = [12, 45, 8, 67, 23]

const sortedArr = arr.sort((a, b) => a - b)

console.log(sortedArr.at(-2))



const str1 = "Artificial Intelligence"
let count = 0;
const vowels = "aeiouAEIOU"
const letters = str1.trim(" ").toLowerCase().split("")
for (let i = 0; i < str1.length; i++) {
  if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
    count = count + 1;
  }
}


function Palindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    return { "This is Panlindrome": str }
  }

}
console.log(Palindrome("father"))



console.log("vowels", count)
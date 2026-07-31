let str = "my class is python"
console.log(str[1])

console.log(str.toUpperCase())

console.log(str)

console.log(str.toLowerCase())
console.log(str.charAt(1))
console.log(str.slice(15))

console.log(str.split(''))


function capitalizeWords(str) {
  const words = str.split(" ")
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    words[i][0] = words[i][0].toUpperCase()
    newWords.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return newWords.join(" ")
}

function reverseAString(str) {
  // const words = str.split(" ")
  return str.split(" ").reverse().join(" ");
}

console.log(reverseAString(str))
console.log(capitalizeWords(str))
const noDuplicates = [...new Set([1, 2, 2, 3, 4, 4, 5, 1])]
console.log(noDuplicates)

const arr1 = [1, 2, 3, 4]

const arr2 = [5, 6, 7, 8]

const arr3 = [...arr1, ...arr2]

console.log(...arr3)
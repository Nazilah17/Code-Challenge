// Linear Search
function linearSearch(num, arr) {
  return arr.find((item) => item === num);
}

console.log(linearSearch(3, [8, 3, 9, 2, 5])); // Hasil: 3
console.log(linearSearch(4, [2, 6, 7, 4, 1])); // Hasil: 4
console.log(linearSearch(9, [2, 6, 7, 5, 1])); // Hasil: undefined

// Fizz Buzz Array
function fizzBuzzArray(arr) {
  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "fizz buzz";
    } else if (num % 3 === 0) {
      return "fizz";
    } else if (num % 5 === 0) {
      return "buzz";
    } else {
      return num;
    }
  });
}

console.log(fizzBuzzArray([8, 3, 9, 2, 5])); // Hasil: [8, "fizz", "fizz", 2, "buzz"]
console.log(fizzBuzzArray([3, 4, 6, 7, 9])); // Hasil: ["fizz", 4, "fizz", 7, "fizz"]
console.log(fizzBuzzArray([4, 5, 9, 15, 19])); // Hasil: [4, "buzz", "fizz", "fizz buzz", 19]
console.log(fizzBuzzArray([2, 4, 7, 8, 1])); // Hasil: [2, 4, 7, 8, 1]

// Linear Search
function linearSearch(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return num;
    }
  }
  return undefined;
}

console.log(linearSearch(3, [8, 3, 9, 2, 5])); // Hasil: 3
console.log(linearSearch(4, [2, 6, 7, 4, 1])); // Hasil: 4
console.log(linearSearch(9, [2, 6, 7, 5, 1])); // Hasil: undefined

// Fizz Buzz Array
function fizzBuzzArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let value;
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      value = "fizz buzz";
    } else if (arr[i] % 3 === 0) {
      value = "fizz";
    } else if (arr[i] % 5 === 0) {
      value = "buzz";
    } else {
      value = arr[i];
    }
    result[i] = value;
  }
  return result;
}

console.log(fizzBuzzArray([8, 3, 9, 2, 5])); // Hasil: [8, "fizz", "fizz", 2, "buzz"]
console.log(fizzBuzzArray([3, 4, 6, 7, 9])); // Hasil: ["fizz", 4, "fizz", 7, "fizz"]
console.log(fizzBuzzArray([4, 5, 9, 15, 19])); // Hasil: [4, "buzz", "fizz", "fizz buzz", 19]
console.log(fizzBuzzArray([2, 4, 7, 8, 1])); // Hasil: [2, 4, 7, 8, 1]

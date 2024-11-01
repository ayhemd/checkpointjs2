//REVERSSE A STRING //
function reverseString(str) {
    return str.split("").reverse().join();
  }
  
  
  console.log(reverseString("Hello World!")); 



  //Count characters//
  function countCharacters(str) {
    return str.length;  
  }


  //capitalize first letter in every words//
  function capitalizeWords(sentence) {
    return sentence
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
//mawimum of array//

function findMax(arr) {
  return Math.max(...arr);
}


//minimun in array//*

function findMin(arr) {
  return Math.min(...arr);
}


//SOME OF ARRAY//
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}


//filter array//

function filterArray(arr, condition) {
  return arr.filter(condition);
}
// Example condition: (num) => num > 10

  

//FACTORIAL//
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}


//prime number//

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}



  
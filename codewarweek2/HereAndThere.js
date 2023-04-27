//An array is given with palindromic and non-palindromic numbers
//write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.


function convertPalindromes(numbers) {
    return numbers.map(arr => {
      if(arr.toString() === arr.toString().split('').reverse().join('')){
        return 1;
      }else {
        return 0;
      }
    })
    };
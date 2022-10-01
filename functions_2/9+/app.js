// 1. *Напишите функцию, рассчитывающую ряд Фибоначчи используя рекурсию.
// Числа Фибоначчи – ряд натуральных (целых и положительных) чисел, каждое из
// которых является суммой двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

// const value = 8
// const arr = [1, 1];

// for (let i = 0; i < value - 2; i++) {
//     arr.push(arr[i] + arr[i + 1])
// }
// console.log(arr);

// function getFibonacciSeries(array, number) {
//     let i = 0;
//     if (i < number - 2) {
//         array.push(array[i] + array[i + 1])
//         i++
//     } 
//     // for (let i = 0; i < number - 2; i++) {
//     //     array.push(array[i] + array[i + 1])
//     // }
//     return getFibonacciSeries(array, number)
// }

// console.log(getFibonacciSeries(arr, value));

function fibonacci(n){
    if(n == 1) return 0;  // Return value for n=1
    if(n == 2) return 1;  // Return value for n=2
    // Recursive call
    return fibonacci(n-1) + fibonacci(n-2); 
  }
    
  const n = 10;
  // Create a new array of size 'n'
//   var series = new Array(n); 
  const series = []
  // Fills all places in array with 0
//   series.fill(0);   
  for(let i = 1; i <= n; i++) {
      // Store i-th Fibonacci number
      series[i-1] = fibonacci(i); 
  }

  // Print the series
  console.log(series);
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

function sumOfMinimums(arr) {
    let sum = [];
    let res = [];
  
    arr.forEach((el) => {
      el.sort((a,b) => a-b).filter((el, indx) => indx ===0).map(el => sum.push(el));
    });
      return res = sum.reduce((a,b) => a + b)
  }
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []


function alternate(n, firstValue, secondValue){
    let res = []
    for (let i = 1; i<=n; i++){
      if (i % 2 === 0) {
        res.push(secondValue);
      } else {
        res.push(firstValue);
      }
    }
    return res
  }
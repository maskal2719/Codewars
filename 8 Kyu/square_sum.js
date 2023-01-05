function squareSum(numbers){
    let res = 0;
    numbers.forEach((item) => {
      res += item ** 2;
    })
   return res;
  }
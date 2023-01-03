function solution(number){
  let arr = [];
  
  if(number <= 0) {
    return 0;
  }
    for(let i = 0; i<number; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        arr.push(i)
      } 
    }
  let res = arr.reduce((sum,curr) => {
    return sum + curr;
  },0)
  return res;
}
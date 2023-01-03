function spinWords(string){
    let res = [];
    let arr = string.split(' ');
    arr.forEach(element => {
        if(element.length < 5) {
            res.push(element)
        }else {
        let a = element.split('').reverse().join('')
        res.push(a)
       }
    });
    return res.join(' ');
  }

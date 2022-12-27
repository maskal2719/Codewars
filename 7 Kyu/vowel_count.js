// Return the number (count) of vowels in the given string.We will consider a, e, i, o, u as vowels for this Kata (but not y).The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let a = 'aeiou';
    let strToArr = str.toLowerCase().split('');
    return strToArr.reduce((acc, cur) => a.includes(cur) ? acc += cur : acc, '').length;
  }
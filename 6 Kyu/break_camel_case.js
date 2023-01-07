// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {

    const arr = string.split('');
    for(let i = 0; i <= arr.length-1; i++){
        if (arr[i] === arr[i].toUpperCase()){
            arr[i] = ' ' + arr[i];
        }
    }

    return arr.join('');
}
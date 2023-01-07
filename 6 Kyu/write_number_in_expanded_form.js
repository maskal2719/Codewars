// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.

function expandedForm(num) {
    let arr = String(num).split('');
    let length = arr.length-1;
    let arr2 = [];

    for(let i= 0; i<=arr.length-1; i++) {
        arr2.push(arr[i] * (10**length--));
    }

    let delZero = arr2.filter((el) => {
        return el > 0;
    })

    let final = delZero.join(' + ');

    return final;
}
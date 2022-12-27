// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects. All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

const combine = (...rest) => rest.reduce((result, current) => {
    for(let key in current) {
        let value = current[key];
        result[key] = result[key] ? result[key] + value : value;
    }
    return result;
}, {})
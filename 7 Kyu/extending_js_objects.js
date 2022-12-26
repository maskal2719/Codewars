// Your task is to extend JavaScript Array object, with methods .first() and .last(), so you can get respectively first or last element of the array.

Array.prototype.first = function () {
    return this[0]
};

Array.prototype.last = function () {
    return this[this.length - 1];
};
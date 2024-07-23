const removeFromArray = function() {
    let array = arguments[0];
    let toRemove = new Set(Array.prototype.slice.call(arguments, 1));
    let result = [];
    for (const val of array) {
        if (!toRemove.has(val)) {
            result.push(val)
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

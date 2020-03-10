//console.log("min");

const min = function (arr) {
    if (arr.length < 1 || !Array.isArray(arr)) return null;
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

module.exports = min;
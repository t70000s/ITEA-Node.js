//console.log("sum");

const sum = function (x, y) {
    if (typeof x != "number" || typeof y != "number") return null;
    return x + y;
}

module.exports = sum;
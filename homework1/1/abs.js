//console.log("abs");

const abs = function (num) {
    if (typeof num != "number") return null;
    return num < 0 ? -num : num;
}

module.exports = abs;
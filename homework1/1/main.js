const mod_abs = require("./abs");
const mod_min = require("./min");
const mod_sum = require("./sum");

console.log("Число по модулю: "+ mod_abs(-6.3));
console.log("Минимум массива: "+ mod_min([0, 8, 5, -6, 3, 11, -4, 6, 1.5, -7]));
console.log("Сумма чисел:     "+ mod_sum(8, 7));
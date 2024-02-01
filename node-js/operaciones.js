// module.exports = {
//     suma: (a, b) => {
//         return a + b;
//     },
//     resta: function (a, b) {
//         return a - b;
//     },
//     multiplicacion: function (a, b) {
//         return a * b
//     },
//     otraOperacion: function (a, b) {
//         let op1 = this.resta(a,b);
//         let op2 = this.suma(op1, b);

//         return op1 * op2;
//     }
// }

module.exports.suma = function (a, b) {
    return a + b;
}

module.exports.resta = (a, b) => {
    return a - b;
}

module.exports.multitply = function (a, b) {
    return a * b;
}

// module.exports = {
//     suma,
//     resta,
//     multiply: multiplicacion
// }

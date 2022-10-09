// 7. На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 = 1^0 + 2^1 + 3^2 + 4^3 + 5^4 = 1 + 2 + 9 + 64 + 625 = 

const n = 12345

function doExponentiation(n) {
    let sum = 0
    let arr = String(n).split("")
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** i
    }
    return sum;
}
console.log(doExponentiation(n));

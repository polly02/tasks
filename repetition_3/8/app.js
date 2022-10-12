// 4. На вход программе подается число в двоичной системе счисления. 
// Необходимо преобразовать его в десятичную систему счисления

// const n = 1001101 //77
const n = 10111 //23

const number = String(n)

function doConversionToDecimalSystem(number) {
    if (number.length === 1) {
        return +number
    } else {
        let middleValue = +(number.slice(0, 1))
        return middleValue * (2 ** (number.length - 1)) + doConversionToDecimalSystem(number.slice(1))
    }
}

console.log(doConversionToDecimalSystem(number));
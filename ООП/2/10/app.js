// 10. Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

// // const n = 1001101 //77
// const n = 10111 //23

// const number = String(n)

// function doConversionToDecimalSystem(number) {
//     if (number.length === 1) {
//         return +number
//     } else {
//         let middleValue = +(number.slice(0, 1))
//         return middleValue * (2 ** (number.length - 1)) + doConversionToDecimalSystem(number.slice(1))
//     }
// }

// console.log(doConversionToDecimalSystem(number));

class Conversion {
    doBinaryNumber(number) {
        
        if (n.length === 1) {
            return +n
        } else {
            let middleValue = +(n.slice(0, 1))
            return middleValue * (2 ** (n.length - 1)) + this.doBinaryNumber(n.slice(1))
        }
    }
}

const conversion = new Conversion()
conversion.doBinaryNumber(10111)
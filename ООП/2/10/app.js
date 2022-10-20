// 10. Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

class Conversion {
    doBinaryNumber(n) {
        if (n.length === 1) {
            return +n
        } else {
            let middleware = +(n.slice(0, 1))
            return middleware * (2 ** (n.length - 1)) + this.doBinaryNumber(n.slice(1))
        }
    }
}

const conversion = new Conversion()
console.log(conversion.doBinaryNumber(String(1001101))); //77
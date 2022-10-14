// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
//     разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции.Добавить проверки на ввод

class Calculator {
    // constructor(value1, value2){
    //     this.value1 = value1
    //     this.value2 = value2
    // }
    // getDiff() {
    //     return this.value1 - this.value2
    // }

    getSum(value1, value2) {
        return value1 + value2
    }

    getDiff(value1, value2) {
        return value1 - value2
    }

    getProizv(value1, value2) {
        return value1 * value2
    }

    getDelenie(value1, value2) {
        return value1 / value2
    }
}

const calculator = new Calculator()
console.log(calculator.getSum(2, 3));
console.log(calculator.getDiff(2, 3));
console.log(calculator.getProizv(2, 3));
console.log(calculator.getDelenie(2, 3));
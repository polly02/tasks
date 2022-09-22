// 5. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.

function multiply() {
    let str = "";
    return function () {
        let n = Math.round(Math.random() * 100)
        if (!str.includes(n)){
            return n
        }
    }
}

const wrapper = multiply()
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathСalculation {
    doArray(n) {
        const arr = []
        for (let i = 0; i < n; i++) {
            arr[i] = +prompt("enter element of array")
        }
        return arr
    }

    countElem(n) {
        const arr = this.doArray(n)
        let res = arr.filter(el => el % 2 === 0)
        return res.length
    }
}

const mathСalculation = new MathСalculation()
console.log(mathСalculation.countElem(+prompt("enter length of array")));

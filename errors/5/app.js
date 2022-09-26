// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в диапазоне 0 <
// 100, то занести в новый массив. Добавить проверки и обработать их.
// Обр диапазоне 10<nатите внимание, тут как минимум 3 функции. Первая:
// формирование массива. Вторая: валидация. Третья: основная логика задачи

const n = +prompt("enter the number");

function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr;
}

function checkArr(arr) {
    if (Array.isArray(arr)) throw new Error("не массив")
    if (arr.some(el => isNaN(el))) throw new Error("в массиве не только числа")
    if (arr.some(el => el < 0)) throw new Error("в массиве отрицательыне числа")
    return true
}

function doNewArray(arr) {
    try {
        if (checkArr(arr)) {
            const newArr = arr.filter(el => el >= 10 && el <= 100);
            if (!newArr.length) throw new Error("все элемены не удовлетворяют условию")
            return newArr
        }
    } catch (error) {
        return error.massage
    }
}

const randomArray = doArr(n)
console.log(doNewArr(randomArray));
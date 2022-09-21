// 3. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const arr = ["by", "belarus", "de", "ru", "germany"];

function getArray (a) {
    let res = a.filter(el => el.length <=2)
    return res
}
console.log(getArray(arr));
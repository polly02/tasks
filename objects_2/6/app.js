// 6. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values

const n = 5
const obj = {}

function doObject(n) {
    for (let i = 1; i <= n; i++) {
        obj[i] = Math.floor(Math.random() * 100)
    }
    console.log(Object.values(obj));
}

doObject(n);
// 2. Найти максимальное число динамичного массива. filter 

let n = +prompt("")
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt(""))
}

let a = arr[0]

let res = arr.filter(elem => {
    if (elem > a) {
        a = elem;
        return true
    }
})
console.log(res[res.length - 1]);

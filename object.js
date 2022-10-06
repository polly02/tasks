// 1. На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае

// const obj = {
//     id: 1,
//     name: "Polina",
//     age: 19
// }
// const str = "age"

// function check(str, obj) {
//     const arr = Object.keys(obj)
//     let flag = false
//     for (const item of arr) {
//        flag = item === str ? true : false
//     }
//     return flag
// }

// console.log(check(str, obj));
// console.log(obj.hasOwnProperty(str));

// 2. Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     let input = document.querySelector(".inpt").value
//     let obj = {}
//     for (let i = 0; i < input; i++) {
//         obj[i] = Math.floor(Math.random() * 100)
//     }
//     const count = qtyOfPair(obj);
//     console.log(count);
// })

// function qtyOfPair(obj) {
//     let arr = Object.entries(obj)
//     return arr.length
// }

// 3. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

// const obj = {
//     id: 1,
//     name: "Polina",
//     age: 19
// }

// const str = "Polina"

// function check(str, obj) {
//     const arrvalues = Object.values(obj)
//     let flag = false
//     for (let item of arrvalues) {
//         if (item === str) {
//             flag = true
//             break
//         }
//     }
//     return flag
// }
// console.log(check(str, obj));

// 4. На входе объект. Ключи и значения - автоинкремент (генерируется
// автоматически от 1 до n). Написать функцию на поиск в объекте только четных
// ключей.


// const btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
// const obj = {}
//     const input = +document.querySelector(".inpt").value
//     for (let i = 0; i < input; i++) {
//         obj[i] = Math.floor(Math.random() * 100)
//     }
//     let result = Object.keys(obj).filter(elem => elem % 2 === 0)
//     console.log(result);
// })


// 5. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 

const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const inp = +document.querySelector(".inpt").value
    const obj = {}
    for (let i = 0; i < inp; i++) {
        obj[i] = Math.floor(Math.random() * 100)
    }
    console.log(obj.hasOwnProperty(10));

    console.log(10 in obj);

    const arr = Object.keys(obj).map(el => +el)

    console.log(arr.some(el => el == 10));

    let a = false;
    arr.forEach(el => el == 10 ? a = true : null)
    console.log(a);

    console.log(arr.filter(el => el == 10).length ? true : false);

    console.log(arr.includes(10));

    for (let i = 0; i < arr.length; i++) {
        if (i == 10) {
            console.log(true);
            break
        }
    }

    if (/[1][0]/g.test(arr.join(' '))) {
        console.log(true);
    }

    let i = 0;
    while (i < obj.length) {
        if (arr[i] == 10) {
            console.log(true);
            break
        }
        i++
    }
})
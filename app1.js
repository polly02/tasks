// массив/методы перебора массива

// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичный массив данных
// [“javascript”, “c#”, “c”, “java”]. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значения статичного массива.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

//??????????????????????

// let n = +prompt("");
// const arr = [];
// const arr2 = ["javascript", "c#", "c", "java"]

// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if(isNaN(input)) {
//         arr.push(input)
//     }
// }

// arr.forEach(elem => {
//     elem.includes()
// })



// 16. *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n.
// Необходимо разбить данный одномерный массив на маленькие массивы в
// зависимости от того, какого число ввел пользователь. Добавить проверки на ввод
// числа (значение n не должно быть больше длины массива, 0, пустая строка,
// строковый тип данных). Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]




// 

// 7. Найти значение массива, повторяющееся в нем наибольшее количество раз

// const arr = [1, 2, 3, 3, 4, 5, 5, 5, 5].sort();
// const a = []; //сами элементы
// const b = {}; //кол-во повторение элементов

// arr.forEach(elem => {
//     if (a.includes(elem)) {
//         b[elem] += "1"
//     } else {
//         a.push(elem)
//         b[elem] = "1"
//     }
// })
// console.log(b);
// let max = 0
// for (let i = 0; i < a.length + 1; i++) {

//     if (b[i] > b[i + 1]) {
//         max = i
//     } else if (max < b[i + 1]) {
//         max = (i + 1)
//     }
// }
// console.log(max);


// 13. *Дана строка состоящая из следующего набора скобок:
// (, ), {, }, [ и ].
// Каждой открывающей скобке соответствует закрывающая, образуя пары. Будем
// считать строку удовлетворяющей условию задания, если все скобки закрываются
// в нужном порядке, т.е: для каждой открывающей есть закрывающая из той же
// пары; скобки закрываются в правильном порядке. При решении задачи
// разрешается применять все известные вам на сегодняшний день методы
// программирования для достижения поставленной задачи
// ()[]{} -> true
// {[]} -> true
// ((()(()))) -> false
// (] -> false
// ([)] -> false




// 05.09 объекты

// 12. На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел

// const obj = {};
// const arr = [];
// let n = +prompt("")
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if (!isNaN(input)) {
//         arr.push(+input)
//     }
// }
// obj.sum = arr.reduce((sum, elem) => sum + elem, 0)
// console.log(obj);

// 13. На входе пустой объект; n – количество элементов рандомно сгенерированного
// массива. Необходимо заполнить пустой объект, где ключи – циклично
// сгенерированная последовательность от 0 до n, значения – элемент рандомно
// сгенерированного массива. Math.random()
// 4 -> [34, 11, 43, 1] // 4 – n; элементы массива сгенерированы рандомно
// {
// 0 : 34,
// 1 : 11,
// 2 : 43,
// 3 : 1
// }
// //????
// const obj = {};
// //let n = +prompt("");
// let n = 5;
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(Math.round(Math.random() * 100))
// }
// for (const key in obj) {
//     obj[key] = arr[i]
// }
// console.log(obj);

// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// { {
// 1 : 1, 1 : 1,
// 2 : 2, 2 : 2,
// 3 : 2, 4 : 3,
// 4 : 3, -> 5 : 4,
// 5 : 4, 7 : 5
// 6 : 4 }
// 7 : 5
// }

//????????
// const obj = {
//     1: 1,
//     2: 2,
//     3: 2,
//     4: 3,
//     5: 4,
//     6: 4,
//     7: 5
// }

// let res = obj.filter((newObj, elem) => {
//     if (!obj.includes(obj[elem])) {
//         newObj[elem] = elem
//     }
//     return newObj
// }, {})
// console.log(res);

// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

// const arr = [1, 2, 3, 4, 5];
// const obj = arr.reduce((newObj, elem) => {
//     if (elem % 2 === 0) {
//         newObj[elem] = true;
//     } else {
//         newObj[elem] = false;
//     }
//     return newObj
// }, {})
// console.log(obj);

// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

// const obj = {
//     1: "",
//     2: "",
//     3: "",
//     4: "",
//     5: ""
// }
// const arr = []
// for (const key in obj) {
//     let input = +prompt("")
//     obj[key] = input;
//     arr.push(obj[key])
// }
// console.log(arr);


/////////////////////////

// const arr = [
//     { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ];

// // 1. Read
// console.log(arr);
// // 2. Create.  Запушить в БД объект только в том случае, если нет совпадений по
// // label (добавить ключ id со значением label в toLowerCase). Если совпадение есть – ошибка
// const obj = { "label": "Test", "category": "test", "priority": 1 }
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].label !== obj.label) {
//         count++
//     }
// }

// let a = obj.label.toLowerCase()
// const newObj = { id: a, ...obj }

// if (count === arr.length) {
//     arr.push(newObj)
//     console.log(arr);
// } else {
//     console.log("error");
// }
// // 3. Update
// // Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести обновление значений для соответствующих
// // ключей.
// // Примечание: для удаления объекта в БД можно отфильтровать объект БД не включая id клиента. В результативный массив
// // запушить клиентский, тем самым обновить объект БД
// // Если совпадения по id нет – ошибка

// //??????????????
// const obj1 = { "id": "test", "label": "Test", "category": "test", "priority": 1 };
// const res = arr.reduce((nObj, elem) => {
//     if (nObj[id] === obj1[id]) {
//         delete nObj
//         arr.push(obj1)
//     } else {
//         console.log("error");
//     }
// })
// console.log(res);


//08.09 функции
// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

// const namse = prompt("")
// const surname = prompt("")

// function getName(name, surname) {
//     return `Привет, ${name} ${surname}`
// }
// console.log(getName(namse, surname));


// 2. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

// let str = prompt("").split(" ");

// function getUpperCase(a) {
//     let new_arr = a.map(el => {
//         return el[0].toUpperCase()+el.slice(1).toLowerCase()
//     })
//     return new_arr.join(" ")
// }
// console.log(getUpperCase(str));

// 3. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

// const arr = ["by", "belarus", "de", "ru", "germany"]

// function getStaticArr(newArray) {
//     let result = newArray.filter(el => el.length <= 2)
//     return result
// }

// console.log(getStaticArr(arr));


// 4. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

// const arr = [1, 2, 3, "asd", 5]

// function chekArr(newArr) {
//     let res = newArr.filter(el => {
//         return !isNaN(el)
//     })
//     return newArr.length === res.length ? true : false
// }

// console.log(chekArr(arr));

// 5. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования
// массива. Вторая для нахождения количества элементов массива

const n = +prompt("")

function findCountElems(newArr) {
    return newArr.length;
}
function doArr(value) {
    let arr = []
    for (let i = 0; i < value; i++) {
        arr.push(prompt(""))
    }
    let count = findCountElems(arr)
    return count
}

console.log(doArr(n));


// 6. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива
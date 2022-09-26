//25.09

// const a = undefined || 10
// const b = "undefined" || 10
// const c = "" || 10
// console.log(a, b, c);



// function multi(){
//     let num = 0
//     return function(){
//         num ++
//         return num
//     }
// }

// const wraper = multi()
// console.log(wraper());
// console.log(wraper());



// const arr = [1, 2, 3, 4, 5]

// function getSumma(arr){
//     if(arr.length === 1) return arr[0]
//     else{
//         return arr[0] + getSumma(arr.slice(1))
//     }
// }

// console.log(getSumma(arr));



// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не оценил использование комментариев
// в ветке development и попросил их убрать. Вырезая куски кода вы поняли, что их чересчур много.
// Необходимо написать регулярное выражение, которое вырежет все комментарии из html разметки
// <!--  -->
// *

// const html = `<div>
// <!-- asd -->
// <input>
// <!-- 123 -->
// <div>`

// function deleteComments(html){
//     let res = html.replaceAll(/<!-- [\w/-_ !*]+ -->/g, "")
//     return res
// }

// console.log(deleteComments(html));


// Напишите функцию, принимающую в качестве параметра статичный объект. Функция возвращает количество
// пар ключ / значение этого объекта. Использовать IIFE


// (function () {
//     const obj = {
//         1: "a",
//         2: "b",
//         3: "c"
//     }
//     let count = 0
//     for (let key in obj) {
//         if (key) count++
//     }
//     console.log(count);
// })()

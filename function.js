//12.09


// 4. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

// const obj = {

// }



//18.09 - errors

// 1. На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

// const num = prompt("enter num");

// function doData(num) {
//     try {
//         if (!isNaN(num) || num % 2 === 1) throw new Error("нечетное или строка")
//         return num
//     } catch (error) {
//         return error.message;
//     }
// }
// console.log(doData(num));

// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

// const arr = [1, 2, 3, 4, "text", 5]

// function checkArray(x) {
//     try {
//         let bool = x.every(el => !isNaN(el) ? false : true)
//         if (!bool) throw new Error("одно значение не число")
//         return x
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkArray(arr));

// 3. Дан массив чисел внутри строки. Необходимо строку преобразовать в массив
// используя JSON.parse. Если же после того как вы спарсили данные у вас не
// массив, то бросить исключение. Добавить проверку на числа. Далее вывести
// только те числа, которые кратны 3

// const json = `[
//         { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3}
//         ]`

// let parsedData = JSON.parse(json)

// function checkNum(arr) {
//     let count = 0
//     arr.forEach(el => isNaN(el.priority) ? count++ : null)
//     if (count > 0) throw new Error(("это не число"))
//     return true
// }

// function findPriority(arr) {
//     try {
//         if (checkNum(arr)) {
//             const newArr = arr.filter(el => el.priority % 3 === 0)
//             if (!newArr.length) throw new Error(("нет чисел кратных 3"))
//             return newArr
//         }
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(findPriority(parsedData));

// 4. Дана строка массива. Необходимо спарсить строку и преобразовать в массив.
// Если же после того как вы спарсили данные у вас не массив, то бросить
// исключение. Далее вывести те элементы массива, в котрых id – четное значение

// const json = `[
//         { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3}
//         ]`

// let parsedData = JSON.parse(json)

// function checkArr(arr) {
//     if (!Array.isArray(arr)) throw new Error("это не массив")
//     if (arr.some(el => isNaN(el.id))) throw new Error("есть строки")
//     return true
// }

// function findValue(arr) {
//     try {
//         if(checkArr(arr)) {
//             const newArr = arr.filter( el => el.id % 2 === 0)
//             if(!newArr.length) throw new Error ("нет четных id")
//             return newArr
//         }
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(findValue(parsedData));

// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в диапазоне 0 <
// 100, то занести в новый массив. Добавить проверки и обработать их.
// Обр диапазоне 10<nатите внимание, тут как минимум 3 функции. Первая:
// формирование массива. Вторая: валидация. Третья: основная логика задачи

// const n = +prompt("enter the number");

// function doArr(n) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr;
// }

// function checkArr(arr) {
//     if (Array.isArray(arr)) throw new Error("не массив")
//     if (arr.some(el => isNaN(el))) throw new Error("в массиве не только числа")
//     if (arr.some(el => el < 0)) throw new Error("в массиве отрицательыне числа")
//     return true
// }

// function doNewArray(arr) {
//     try {
//         if (checkArr(arr)) {
//             const newArr = arr.filter(el => el >= 10 && el <= 100);
//             if (!newArr.length) throw new Error("все элемены не удовлетворяют условию")
//             return newArr
//         }
//     } catch (error) {
//         return error.massage
//     }
// }

// const randomArray = doArr(n)
// console.log(doNewArr(randomArray));

// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

// let a = prompt("enter the number");
// let b = prompt("enter the number");
// let c = prompt("enter the number");

// function buildTriangle(a, b, c) {
//     try {
//         if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("одно из введеных значений не число")
//         return (+a + +b > +c && +a + +c > +b && +b + +c > +a) ? true : false
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(buildTriangle(a, b, c));

// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9^2 === 81, 1^2=== 1)

// let n = prompt("enter the number");

// function doubleNumbers(num) {
//     try {
//         if (isNaN(num)) throw new Error("введенное значение не число");
//         let a = ""
//         for (let i = 0; i < num.length; i++) {
//             a += num[i] ** 2
//         }
//         return a
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(doubleNumbers(n));

// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// let arr = ["a", "b", "c", "d", "f"];

// function findLostElement(arr) {
//     try {
//         if (arr.some(el => !isNaN(el))) throw new Error("в массиве не только буквы")
//         const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy'

//     } catch (error) {
//         return error.message
//     }
// }


// console.log(findLostElement(arr));

// 9. Мальчик идет долгим путем со школы домой. Чтобы сделать прогулку веселее, он
// складывает все номера домов, мимо которых проходит. К сожалению, не на всех
// домах написаны номера, к тому же мальчик регулярно меняет улицы по очереди,
// поэтому номера не представляются ему в определенном порядке.
// В какой-то момент во время прогулки мальчик встречает дом с написанным на
// нем 0 номером. Это настолько его удивляет, что он перестает прибавлять числа к
// своей сумме сразу после того, как видит этот дом.
// Для заданной последовательности домов определите сумму, которую получит
// мальчик. Гарантируется, что на пути всегда будет хотя бы один нулевой дом.
// Добавить проверку, что номера домов – только числа.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

// const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];

// function checkArr(arr) {
//     if (arr.some(el => isNaN(el))) throw new Error("в массиве есть строки");
//     if (arr.some(el => el < 0)) throw new Error("в массиве отрицательыне числа");
//     return true
// }

// function getSumma(arr) {
//     try {
//         if (checkArr(arr)) {
//             let sum = 0
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] !== 0) {
//                     sum += arr[i]
//                 } else {
//                     break
//                 }
//             }
//             return sum
//         }
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(getSumma(arr));

// 10. На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

// const email = "polina@gmail.com";

// function checkEmail(mail) {
//     try {
//         const bool = mail.includes("@")
//         if(!bool) throw new Error ("неверный формат почты")
//         return true
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkEmail(email));

//19.09

// 1. На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

// const num = "123345s"

// function checkStr(str) {
//     try {
//         if (!/^[\d]+$/g.test(str)) throw new Error("не числа")
//         return true
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkStr(num));

// 2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

// const str = "Polina Zdanovich 19"

// function checkStr(str){
//     try {
//         if(!/^[a-zA-Z]+ [a-zA-Z]+ [\d]{1,2}$/g.test(str)) throw new Error("не подходит под RegEx")
//         return true
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkStr(str));



// 3. На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

// const str = "Polina Zdanovich student"

// function checkStr(str){
//     try {
//         const change = str.replaceAll(/ /g, "!")
//         if(change.includes(" ")) throw new Error("вы ничего не изменили")
//         return change
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkStr(str));

// 4. На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит
// под регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

// const mail = "polina@gmail.com"

// function checkEmail(email){
//     try {
//         if(!/^[a-zA-Z0-9_\-\.]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error("не подходит под формат почты")
//         return email
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkEmail(mail));

// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

// const str = "https://github.com/Polina"

// function checkURL(str){
//     try {
//         if(!/^(http|https):\/\/[a-zA-Z]+\.[a-z]{1,3}\/[\w]+$/g.test(str)) throw new Error ("error")
//         return str
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkURL(str));


// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

//?
// const road = "C:\Users\Admin\Desktop\test.txt";

// function checkRoad(road) {
//     try {
//         if(!/^[A-Z]{1}:\\[A-Za-z0-9]+\\[A-Za-z0-9]+\\[A-Za-z0-9]+\\[A-Aa-z0-9]+\.[a-z]{1,3}$/g.test(road)) throw new Error("не соответствует формату указания пути")
//         return road
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkRoad(road));

// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

//?

// const pass = "abc_123" 

// function checkPassword(pswrd) {
//     try {
//         if(!(/^[a-zA-Z0-9_\-\.@\/]+$/g.test(pswrd)) && pswrd.length >= 8) throw new Error ("ненадежный пароль")
//         return pswrd
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkPassword(pass));

// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

//???

// const str = "123_as-D".split("");

// function transformString(string) {
//     try {
//         const newStr = string.filter(el => /^[a-zA-Z]+&/g.test(el))
//         if(str.length === newStr.length) throw new Error("в строке только буквы")
//         else return true        
//     } catch (error) {
//         return error.message;
//     }
// }

// console.log(transformString(str));

// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

//? если 5 цифр - undefined

// const pin = 1236;

// function checkPin(pin) {
//     try {
//         if (!/^[\d]{1,4}$|^[\d]{1,6}$/g.test(pin) || /^[\d]{1,5}$/g.test(pin)) throw new Error("неверная длина пинкода")
//         return pin
//     } catch (error) {
//         return error.massage
//     }
// }

// console.log(checkPin(pin));

// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

//?

// const html = `<div>
// <!-- asdcf -->
// <input>
// <!-- ad1 -->`

// function editCommit(file) {
//     let a = (/<!--[\w\.\*\(\)-_]+-->/g.exec(file))
//     file.replaceAll(a, " ")
//     return file
// }

// console.log(editCommit(html));

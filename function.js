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

// const road = "C:\\Users\\Admin\\Desktop\\test.txt";

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

// const pass = "abcABC_01" 

// function checkPassword(pswrd) {
//     try {
//         if(!(/[a-z]+/g.test(pswrd))) throw new Error ("нет букв в нижнем регистре")
//         if(!(/[A-Z]+/g.test(pswrd))) throw new Error ("нет букв в верхнем регистре")
//         if(!(/[0-9]+/g.test(pswrd))) throw new Error ("нет цифр")
//         if(!(/[-_\\\/\.]+/g.test(pswrd))) throw new Error ("нет специальных символов")
//         if(pswrd.length < 8) throw new Error ("ненадежный пароль")
//         return true
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

// const str = "123_as-D";

// function transformString(string) {
//     try {
//         const newStr = string.replaceAll(/[0-9]+/g,"")
//         // const newStr = string.filter(el => /^[a-zA-Z]+&/g.test(el))
//         if(string.length === newStr.length) throw new Error("в строке только буквы")
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

//? undefined

// const pin = 123645;

// function checkPin(pin) {
//     try {
//         // if (!(/^[\d]+$/g.test(pin) && (String(pin).length === 4||String(pin).length === 6))) throw new Error("неверная длина пинкода")
//         if (!/^([\d]{4}$|[\d]{6}$)/g.test(pin)) throw new Error("error")
//         return pin
//     } catch (error) {
//         return error.message
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
//     let a = /<!--[\w\.\*\(\)-_! ]+-->/g
//     let n = file.replaceAll(a, "")
//     return n
// }

// console.log(editCommit(html));





//22.09

// 1. Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

// const n = +prompt("enter")

// function doArr(n) {
//     const arr = []
//     for (let i = 0; i < n; i++) {
//         arr.push(+prompt(""))
//     }
//     return arr
// }

// function getSumma(arr) {
//     const res = arr.reduce((sum, el) => {
//         if (el > 0) {
//             return sum + el
//         } else {
//             return sum + 0
//         }
//     }, 0)
//     return res
// }

// const data = doArr(n);
// console.log(getSumma(data));


// 2. Реализайте функцию, которая принимает статичный массив и возвращает новый
// массив с отфильтрованными значениями. Массив считается отфильтрованным,
// если в нем присутствуют только числа
// [ 1, 2, “a”, ”b” ] –> [ 1, 2 ]
// [ 1, 2, “aasf”, “b”, “123”, 123 ] –> [ 1, 2, 123 ]

// const arr = [ 1, 2, "aasf", 123];

// function getFilterArr(arr) {
//     return arr.filter(el => !isNaN(el))
// }

// console.log(getFilterArr(arr));


// 3. Реализуйте функцию, которая принимает число и возвращает объект, где ключи –
// каждый единичный символ числа, значение – четность / нечетность. Добавить
// проверки
// 542613 –> { 5: “неч”, 4: “чет”, 2: “чет”, 6: “чет”, 1: “неч”, 3: “неч” }

// const arr = "542613".split("");

// function checkArr(arr) {
//     let bool = arr.some(el => isNaN(el) ? false : true)
//     if (!bool) throw new Error("не только числа")
//     return true
// }

// function getObj(newArr) {
//     try {
//         checkArr(arr)
//         const obj = {}
//         newArr.forEach(el => +el % 2 === 0 ? obj[+el] = "чет" : obj[+el] = "неч")
//         return obj
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(getObj(arr));


// 4. Реализайте функцию, которая принимает строку и определяет является ли слово
// изограммой. Изограмма – это слово, в котором нет повторяющихся букв,
// последовательных или непоследовательных
// Dermatoglyphics –> true
// aba –> false
// moOse –> false

// const str = "Dermatoglyphics".toLowerCase().split("").sort().join("");

// function checkStr(str) {
//     try {
//         let flag = true;
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === str[i + 1]) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (!flag) throw new Error("error")
//         return flag;
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkStr(str));



// 5. Реализуйте функцию, демонстрирующую работу бинарного поиска

// function searchBin(n, arr) {
//     let start = 0
//     let end = arr.length
//     let middle = Math.floor((start + end) / 2);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[middle] = n) return middle;
//         else {
//             if(arr[middle] < n){
//                 start = middle + 1;
//             } else {
//                 end = middle - 1;
//             }
//             middle = Math.floor((start + end) / 2);
//         }
//     }
//     return middle
// }

// console.log(searchBin(5, [1, 4, 5, 6, 7, 7]))

// 6. Реализуйте функцию, которая принимает любое неотрицательное целое число и
// возвращает его числа в порядке убывания. По сути, переставьте цифры, чтобы
// получить максимально возможное число. Добавить проверки
// 42145 –> 54421
// 145263 –> 654321
// 123456789 –> 987654321

// const n = 42145;

// function doMaxValue(n) {
//     try {
//         if (n < 0) throw new Error("отрицательное число")
//         let middleValue = String(n).split("").sort().reverse().join("")
//         return middleValue
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(doMaxValue(n));

// 7. Реализуйте функцию, принимающую строку. Ваша задача – вернуть средний
// символ слова. Если длина слова нечетная, вернуть средний символ. Если длина
// слова четная, верните средние 2 символа. Добавить проверки
// test –> es
// testing –> t

// const str = "trtt"

// function findMiddle(str) {
//     if (str.length % 2 === 0) {
//         let n = str.length % 2
//         return `${str[n + 1]}${str[n + 2]}`
//     } else {
//         let n = str.length % 2 + 1
//         return str[n]
//     }
// }

// console.log(findMiddle(str));

// 8. Реализуйте функцию, принимающую число. Ваша задача – выяснить является ли
// число идеальным квадратом. В математике квадратное число или идеальный
// квадрат – это целое число, являющееся квадратом целого числа; другими
// словами, это произведение некоторого целого числа на самого себя. Если
// является, вывести true, в противном случае false. Добавить проверки
// 3 –> false
// 25 –> true
// 49 –> true

// let n = -24

// function getSqrt(n) {
//     try {
//         if(n<=0) throw new Error("отрицательное число не имеет корней")
//         const sqrt = Math.sqrt(n)
//         if (sqrt % 1 === 0) return true
//         else return false
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(getSqrt(n));

// 9. Middleware – cвязующее программное обеспечение. Прежде чем запрос попадет
// на сервер, запрос поступает в middleware, где находятся функции валидаторы.
// Необходимо реализовать функцию валидатор, которая обрабатывает 2 поля:
// почту, имя пользователя. Для проверки полей воспользуйтесь регулярными
// выражениями. Middleware-функция возвращает true, если оба условия
// отработали успешно и false в противном случае

// const emale = "polina@gmail.com";
// const name = "Polina";
// const number = "+375(29)155-91-55"

// function getValid (emale, name, number) {
//     try {
//         if(!/^[a-zA-Z0-9_\.]+$/g.test(name)) throw new Error("некорректное имя")
//         if(!/^[a-zA-Z0-9_\.]+@[a-z]+\.[a-z]{1,3}$/g.test(emale)) throw new Error("некорректная запись почты")
//         if(!/^\+[0-9]{1,3}\([0-9]{1,2}\)[0-9]{1,3}-[0-9]{1,2}-[0-9]{1,2}$/g.test(number)) throw new Error("некорректная запись")
//         return true
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(getValid(emale, name, number));

// 10. Реализуйте функцию, которая принимает строку из 2 повторяющихся символов.
// Необходимо проверить, содержит ли строка одинаковое количество символов.
// Функция возвращает true, если строка содержит одинаковое количество
// символов и false в противном случае. Добавить проверки
// ooxx –> true
// xooxx –> false
// ooxXm –> ИСКЛЮЧЕНИЕ (3 символа)

// const str = "xooxX".toLowerCase();

// function checkStr(str) {
//     try {
//         const arr = [];
//         for (let i = 0; i < str.length; i++) {
//             if (!arr.includes(str[i])) arr.push(str[i])
//         }

//         if (arr.length > 2 || arr.length < 2) throw new Error("неподходящее количество символов")
//         else {
//             let countA = 0
//             let countB = 0
//             for (let i = 0; i < str.length; i++) {
//                 if (str[i] === arr[0]) countA++
//                 if (str[i] === arr[1]) countB++
//             }
//             if (countA === countB) return true
//             else return false
//         }
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkStr(str));

// 11. Реализуйте функцию, принимающую 2 строки и возвращающую, true, если часть
// одной строки можно переставить так, чтобы она соответствовала 2 строке, и false в
// противном случае, если совпадений нет
// “rkqodlw”, “world” –> true (rkqodlw содержит world)
// “katas”, “steak” –> false (katas не включает steak после перестановки символов)

// const str = "rkqodlw"
// const str2 = "world"

// function checkWords(str1, str2) {
//     let count = 0
//     for (let i = 0; i < str2.length; i++) {
//         if (str1.includes(str2[i])) count++
//     }
//     if (str2.length === count) return true
//     else return false
// }
// console.log(checkWords(str, str2));


// const a = undefined || 10
// const b = "undefined" || 10
// const c = "" || 10
// console.log(a, b, c);




//KR

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

// 1. Найти максимальное число из 2 введенных (2 способа)

// let a = +prompt("Введите значение");
// let b = +prompt("Введите значение");

// // console.log(Math.max(a, b));

// // if (a > b) {
// //     console.log(a);
// // } else {
// //     console.log(b);
// // }
// console.log((a > b) ? a : b);

// 2. Выявить является ли введенное число четным

// let a = +prompt("Введите число");

// if (a % 2 === 0) {
//     console.log("четное");
// } else {
//     console.log("нечетное");
// }

// console.log(a % 2 === 0 ? "четное" : "нечетное");
// a % 2 === 0 ? console.log("четное") : console.log("нечетное");

// 3. Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник

// let a = +prompt("Введите число от 1 до 7");
// let result;
// switch (a) {
//     case 1:
//         result = "пн";
//         break;
//     case 2:
//         result = "вт";
//         break;
//     case 3:
//         result = "ср";
//         break;
//     case 4:
//         result = "чт";
//         break;
//     case 5:
//         result = "пт";
//         break;
//     case 6:
//         result = "сб";
//         break;
//     case 7:
//         result = "вс";
//         break;
//     default:
//         result = "некорректный ввод";
// }
// console.log(result);

// 4. Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

// let a = prompt("");
// if (isNaN(a)) {
//     console.log(false);
// } else {
//     console.log(true);
// }

// console.log (isNaN(a) ? false : true);

// 5. Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом
// числе цифр, а также положительное оно или отрицательное. Например, "Число " +
// num + " однозначное положительное". (length)

// let a = prompt("введите число");

// if (!isNaN(a)) console.log(`${(+a > 0) ? "положительное" : "отрицательное"}\n${a.length}`);
// else console.log("не корректный ввод");

// console.log(!isNaN(a) ? `${(+a > 0) ? "положительное" : "отрицательное"}\n${a.length}` : "не корректный ввод");

// 6. Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых.
// Добавить проверку на ввод только чисел

// let a = prompt("введите число");

// if (!isNaN(a)) {
//     let res = Math.sqrt(a);
//     console.log(Number.isInteger(res) ? res : Math.round(res));
// } 

// 7. Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел

// let s = prompt("введите расстояние");
// const v1 = prompt("введите скорость");
// const v2 = prompt("введите скорость");

// if (!isNaN(s) && !isNaN(v1) && !isNaN(v2)) {
//     console.log(s / (v1 + v2));
// } else {
//     console.log("некорректный ввод");
// }
// !isNaN(s) && !isNaN(v1) && !isNaN(v2) ? console.log(s / (v1 + v2)) : console.log("некорректный ввод");

// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// // месяца (2 способа)

// let a = +prompt("Введите число от 1 до 12");
// let result;
// switch (a) {
//     case 1:
//     case 2:
//     case 12:
//         result = "зима";
//         break;
//     case 3:
//     case 4:
//     case 5:
//         result = "весна";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         result = "лето";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         result = "осень";
//         break;
//     default:
//         result = "некорректный ввод";
// }
// console.log(result);

// if (a === 12 || a >= 1 && a <= 2) {
//     console.log("зима");
// } else if (a >= 3 && a <= 5) {
//     console.log("весна");
// } else if (a >= 6 && a <= 8) {
//     console.log("лето");
// } else if (a >= 9 && a <= 11) {
//     console.log("осень");
// } else {
//     console.log("некорректный ввод");
// }

// 9. Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
// задачу через switch-case. 

// let a = prompt("");

// if (!isNaN(a)) {
//     let result;
//     switch (a) {
//         case 1:
//             result = "зима";
//             break;
//         case 2:
//             result = "весна";
//             break;
//         case 3:
//             result = "лето";
//             break;
//         case 4:
//             result = "осень";
//             break;
//         default:
//             result = "некорректный ввод";
//     }
//     console.log(result);
// } else {
//     console.log("некорректный ввод");
// }

// 10. Пользователь вводит одно число. Необходимо вывести обратное ему (число
//     является обратным при 1/x). Если при этом введённое с клавиатуры число – ноль,
//     то вывести «Обратного числа не существует». Добавить проверку на ввод только
//     чисел

// let a = prompt("");

// if (!isNaN(a)) {
//     if (a !== 0) {
//         console.log(1/a);
//     } else {
//         console.log("обратного числа не существует");
//     }
// } else {
//     console.log("некорректный ввод");
// }

// 11. Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

// let a = prompt("введите значение");

// if (!isNaN(a)) {
//     console.log(Math.floor(a/100));
// } else {
//     console.log("некорректный ввод");
// }

// console.log(!isNaN(a) ? Math.floor(a/100) : "некорректный ввод");

// 12. Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

// let a = prompt("введите число");

// if (!isNaN(a) && a > 0 && a < 1000) {
//     let s = Math.floor(a / 100);
//     let d = Math.floor((a - s * 100) / 10);
//     let e = a - s * 100 - d * 10;
//     console.log(`Сумма цифр = ${s + d + e}\nПроизведение цифр = ${s * d * e}`);
// } else {
//     console.log("некорректный ввод");
// }

// 13. Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 - чет

// let a = prompt("введите число");

// if (!isNaN(a) && a < 10000) {
//     let t = Math.floor(a / 1000);
//     let s = Math.floor((a - t * 1000) / 100);
//     let d = Math.floor((a - t * 1000 - s * 100) / 10);
//     let e = a - t * 1000 - s * 100 - d * 10;
//     console.log(t % 2 === 0 ? `${t} чет` : `${t} неч`);
//     console.log(s % 2 === 0 ? `${s} чет` : `${s} неч`);
//     console.log(d % 2 === 0 ? `${d} чет` : `${d} неч`);
//     console.log(e % 2 === 0 ? `${e} чет` : `${e} неч`);
// } else {
//     console.log("некорректный ввод");
// }

// 14. Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

// let a = prompt("введите число");
// let b = prompt("введите число");

// if (!isNaN(a) && !isNaN(b) && a >= 0 && a < 10 && b >= 0 && b < 10) {
//     console.log(a != 0 ? `I'm ${a}${b}` : `I'm ${b}`);
// } else {
//     console.log("некорректный ввод");
// }

// 15. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки

// let a = prompt("введите текст");

// console.log(isNaN(a) ? a.length : "некорректный ввод");

// 16. Пользователь вводит строку. Вывести первый символ строки (индексы) 

// let a = prompt("введите текст");

// console.log(isNaN(a) ? a[0] : "некорректный ввод");

// 17. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

// let a = prompt("введите текст");

// console.log(isNaN(a) ? a.toUpperCase() : "некорректный ввод");

// 18. Пользователь вводит строку. Необходимо повторить ее трижды 

// let a = prompt("введите текст");

// console.log(isNaN(a) ? a.repeat(3) : "некорректный ввод");

// 19. Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

// let a = prompt("введите текст");

// if (isNaN(a)) {
//     console.log(a === "hschool" ? true : false);
// } else {
//     console.log(a % 2 === 0 ? "четное" : "нечетное");
// }

// 20.Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста 

// let a = prompt("введите текст");

// if (isNaN(a)) {
//     console.log(a.split(""));
//     console.log(a.split(" "));
//     console.log(a.split(" ", 2));
// } else {
//     console.log("некорректный ввод");
// }

// 21. Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l

// let a = prompt("введите текст");

// if (isNaN(a)) {
//         console.log(a.toLowerCase().trim().split("").join("-"));
// } else {
//     console.log("некорректный ввод");
// }


//14.08.2022

// 1. Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

// let a = prompt("введите текст").trim();
// console.log(isNaN(a) && a.toLowerCase() === "hschool" ? true : false);


// 2. Ввести строку.Проверить является ли это число или строка.Если число, то
// выяснить, четное или нет.Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

// const a = prompt("").trim();

// if (isNaN(a)) {
//     console.log(a.split(''));
// } else {
//     console.log(a % 2 === 0 ? "четное" : "нечетное");
// }

// 3. Преобразовать строку ‘сStaCK DevELoper’ в массив вида [‘full, ‘stack’, ‘developer’]

// const a = prompt("").trim().toLowerCase();
// console.log(a.split(" "));

// 4. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

// const a = prompt("").trim().toLowerCase();

// console.log(isNaN(a) ? a.length : "ошибка ввода");

// 5. ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"

// console.log(prompt("").toUpperCase().replaceAll(" ", "-"));

// 6. Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы

// const a = prompt("").trim().toLowerCase();
// if (!isNaN(a)) {
// console.log("ошибка ввода");
// } else {
//     console.log(a[0].toUpperCase() + a.slice(1));
// }

// 7. На вход программе подаётся строка. Замените все @ на '!' с помощью
// глобального поиска и замены (2 способа)

// const a = prompt("").replaceAll("@", "!");
// console.log(a);

// console.log(a.split("@").join("!")); // 2 способ

// 8. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами

// let a = 'aaa bbbbb ccc';
// console.log(a.slice(a.indexOf("b"), a.lastIndexOf("b")) + "b");

// 9. На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

// const a = prompt("введите дату");
// console.log(a.split("-").reverse().join("/"))

// 10. Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

// const a = prompt("");
// let n = a.indexOf(" ");
// console.log(`количество символов - ${a.length}\n${a.slice(n + 1)}\nиндекс 2ой подстроки ${n + 1}`);

// 11. Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

// console.log(prompt("").replaceAll("-", "!"));

// 12. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx'.

// console.log(prompt("").split("-").reverse().join("."));

// 13. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в
// строку 'я+учу+javascript+!'.

// let arr = ['я', 'учу', 'javascript', '!'];
// console.log(arr.join("+"));

// 14. Дан массив. Вывести каждый одельный элемент в консоль (for)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 15. На вход программе подается строка текста, состоящая из слов, разделенных
// ровно одним пробелом. Напишите программу, которая подсчитывает количество
// слов в ней

// const str = prompt("").split(" ");
// console.log(str.length);

// 16. Пользователь вводит строку. Необходимо посчитать количество гласных (for)

// const str = prompt("");
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "а" || str[i] === "и" || str[i] === "е" || str[i] === "у" || str[i] === "о" || str[i] === "я") {
//         count += 1;
//     }
// }
// console.log(count); //гласные
// console.log(str.length - count); //согласные







// 17. Пользователь вводит строку. Необходимо посчитать количество согласных (for)

// let a = prompt("");
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === "s" || a[i] === "v" || a[i] === "n") {
//         count += 1;
//     }
// }
// console.log(count);

// 18. Пользователь вводит строку. Необходимо вывести все гласные отдельной
// строкой (for)
// fullstack => ua

// let a = prompt("");
// let count;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] === "s" || a[i] === "v" || a[i] === "n") {
//         count += a[i];
//     }
// }
// console.log(count);

// 19. На вход программе подается строка. Преобразуйте первую букву каждого слова
// строки в верхний регистр (for)

//????????????????????????

// const str = "avc sdf rsc".trim();
// let result = "";
// for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//         result += str[i].toUpperCase();
//     }

//     if (str[i - 1] === " ") {
//         result += str[i].toUpperCase();
//     } else if (str[i - 1] !== " " && i !== 0) {
//         result += str[i];
//     }
// }
// console.log(result);

// 20.На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр (for)

// const str = "one_ two_ three_   ".trim().replaceAll("_", "");
// let result = "";
// for (let i =0; i < str.length; i++){
//     if (str[i-1] === " ") {
//         result+= str[i].toUpperCase();
//     } else {
//         result +=str[i];
//     }
// }
// console.log(result);

// 21. На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

// const str = "Chris alan".trim();
// let n = str.indexOf(" ");
//     if (str[0] === str[0].toUpperCase() && str[n+1] === str[n+1].toUpperCase()){
//         console.log(true);
//     } else {
//         console.log(false);
//     }

// 22. На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

// const str = "SwAp CaSe";
// result = "";
// for (let i = 0; i<str.length; i++){
//     if(str[i] === str[i].toLowerCase()) {
//         result += str[i].toUpperCase();
//     } else {
//         result += str[i].toLowerCase();
//     }
// }
// console.log(result);

// 23. На вход программе подается строка текста. Напишите программу, которая
// определяет является ли строка хорошей. Текст хороший, если содержит
// подстроку «хорош» во всевозможных регистрах.
// я очень хороший текст => true

// const str = "я очень ХорОший текст".toLowerCase();
// console.log(str.includes("хорош"));

// 24.На вход программе подается строка. Напишите программу, которая подсчитывает
// количество буквенных символов в нижнем регистре.
// abcABCD12345 => 3

//?????????????
//можно ли как-то сокращенно все цифры написать

// const str = "abcABCD12345";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase() && str[i] !== '1' && str[i] !== '2' && str[i] !== '3' && str[i] !== '4' && str[i] !== '5' && str[i] !== '6' && str[i] !== '7') {
//         count++;
//     }
// }
// console.log(count);

// 25. На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5

// const str = "АааГГЦЦцТТтттА".toUpperCase();
// let countA = 0;
// let countG = 0;
// let countC = 0;
// let countT = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'А') {
//         countA++;
//     } else if (str[i] === 'Г') {
//         countG++;
//     } else if (str[i] === 'Ц') {
//         countC++;
//     } else if (str[i] === 'Т') {
//         countT++
//     }
// }
// console.log(`А - ${countA} Г - ${countG} Ц - ${countC} Т - ${countT}`);

//2способ

//???нужен ли???

// const str = "АааГГЦЦцТТтттА".toUpperCase();
// let countA = 0;
// let countG = 0;
// let countC = 0;
// let countT = 0;
// for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//         case 'А':
//             countA++;
//             break;
//         case 'Г':
//             countG++;
//             break;
//         case 'Ц':
//             countC++;
//             break;
//         case 'Т':
//             countT++;
//             break;
//     }
// }
// console.log(`А - ${countA} Г - ${countG} Ц - ${countC} Т - ${countT}`);

// 26. На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если
// заканчивается, то вывести true, в противном случае false

//перерешать 

// const str = "hschool.com".split(".");
// if (str[str.length - 1] === 'com' || str[str.length - 1] === "ru") {
//     console.log(true);
// } else {
//     console.log(false);
// }


// const str = "hschool.com";
// if (str.endsWith(".com") || str.endsWith(".ru")) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 27. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

// https://www.instagram.com/hschool.official/

// const str = "https://www.instagram.com/hschool.official.com".trim();
// if (str.startsWith("http") && str.includes("/") && (str.endsWith(".com") || str.endsWith(".ru"))) {
//     console.log(true);
// } else {
//     console.log(false);
// }
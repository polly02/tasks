// 1. На входе строка, необходимо убрать все личшние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на
// ввод только текстовых значений

// const str = "Введи строку".trim().toLowerCase();
// if (isNaN(str)) {
//     console.log(str.repeat(3));
// } else {
//     console.log("ошибка ввода");
// }

// 2. На вход подается строка из 2 и более слов. Необходимо добавить тире между
// словами 

// const str = "введи строку".trim();
// console.log(str.replaceAll(" ", "-"));

// 3. На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

// const str = "avc asd asr";
// const a = "asd";
// console.log(str.includes(a));

// 4. На вход подаются 2 строки. Если исходная 1 строка зкаканчивается на 2 строку
// вывести true, в противном случае false 

// const a = "hschool.com".split(".");
// const b = "com";

// if (a[a.length - 1] === b) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// 5. На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true 

// const a = "hschool".toLowerCase().trim();
// const b = "hschool".toLowerCase().trim();

// if(isNaN(a) && isNaN(b)) {
//     if (a === b) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log("некорректный ввод");
// }

// 6. На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/

// const str = "https://www.instagram.com/hschool.official/";
// if (str.includes("http://") || str.includes("https://")) {
//     console.log(str.slice(str.lastIndexOf("//") + 2));
// } else {
//     console.log("некорректный ввод");
// }

// 7. На вход подается строка '/home/user/dir/file.txt'. Необходимо вернуть имя файла
// (подстрока после последнего символа “/" ) из полного пути к файлу('file.txt')

// const a = '/home/user/dir/file.txt'.split('/');
// console.log(a[a.length - 1]);

// 8. На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschoo

// const str = 'hSСhOol'.toLowerCase();
// if (isNaN(str)) {
//     console.log(`#${str}`);
// }

//2способ
// const str = 'hSСhOol'.toLowerCase();
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//         result += "#";
//     }
//     result += str[i];
// }
//   console.log(result)


// 1. На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

// const str = 'hSСhOol СomPAnY'.toLowerCase().split(" ").join("");
// if (isNaN(str)) {
//     console.log(`#${str}`);
// }

//2способ
// const str = 'hSСhOol СomPAnY'.toLowerCase().trim();
// let result = '';
// for (let i = 0; i < str.length; i++) {
//     if (a[i] !== " ") {
//         result += a[i];
//     }
// }
// console.log(`#${result}`);

// 2. На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 7 -> 7 – неч
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

// const str = "102".trim();

// if (!isNaN(str)) {
//     for (let i = 0; i < str.length; i++) {
//         if (+str[i] % 2 !== 0) {
//             console.log(`${str[i]} нечет`);
//         } else if (+str[i] === 0) {
//             console.log(`ноль`);
//         } else {
//             console.log(`${str[i]} чет`);
//         }
//     }
// }


// 21.08

// 1. На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

// const a = "123@1@@34";
// let b = ' ';
// for (let i = 0; i<a.length; i++) {
//     if (a[i] === "@") continue
//     b += a[i];
// }
// console.log(b);

// 2. Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.
// const a = 12345;
// if (!isNaN(a)) {
//     const b = a**(1/2);
//     console.log(Math.round(b), b.toFixed(1), b.toFixed(2));
// }

// 3. Напишите скрипт, который будет находить факториал числа. Факториал – это
// произведение всех целых чисел, меньше данного, и его самого.
// 5 -> 1*2*3*4*5

// let a = 5;
// if (!isNaN(a) && +a > 0) {
//     a = +a;
//     let res = 1;
//     for (let i = 1; i <= a; i++) {
//         res *= i;
//     }
//     console.log(res);
// }

// 4. На вход программе подается строковое значение. Если значение больше 2-х и
// меньше 11-ти или больше или равна 26-ти и меньше 30-ти, то выведите 'Верно', в
// противном случае выведите 'Неверно'.

// const a = 15;

// if (a < 11 || a > 26 && a < 38) {
//     console.log("верно");
// } else {
//     console.log("неверно");
// }

// 5. На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел
// 53 -> 8
// 135 -> 9

//перерешать

// const a = "53";
// let result = 0;
// for (let i = 0; i<a.length; i++) {
//     result += +a[i]
// }
// console.log(result);

// 6. На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

// const a = "hschool@mail.ru".trim();
// if (a.includes("@") && (a.endsWith(".com") || a.endsWith(".ru"))) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 7. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до
// сотых.

// const a = 379;
// if (!isNaN(a)) {
//     let b = Math.sqrt(a);
//     console.log(Math.round(b), b.toFixed(1), b.toFixed(2));
// }

// 8. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
// элементов этого массива

// const a = [2, 3, 4, 5];
// let res = 1;
// for (let i = 0; i < a.length; i++) {
//     res *= a[i];
// }
// console.log(res);

// 9. На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке

// let a = prompt("введите число");

// if (!isNaN(a) && +a > 0) {
//     a = +a;
//     for (let i = 1; i <= a; i++) {
//         console.log(i);
//     }
// } else if (!isNaN(a) && +a < 0) {
//     a = +a;
//     for (let i = 1; i >= a; i--) {
//         console.log(i);
//     }
// } else {
//     console.log("ошибка ввода");
// }

// 10. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Если есть -
// выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо

// const a = [1, 2, 5, 9, 4, 13, 4, 10];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === 4) {
//         console.log("Есть!");
//         break;
//     }
// }

// 11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Посчитать
// количество повторений числа 4 в массиве

// const a = [1, 2, 5, 9, 4, 13, 4, 10];
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === 4) {
//         count++;
//     }
// }
// console.log(count);

// 12. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-‘

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = "-";

// for (let i = 0; i < a.length; i++) {
//     res += a[i] + "-"
// }
// console.log(res);

// 13. Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false

// const a = "anna";
// console.log(a === a.split("").reverse().join("") ? true : false);


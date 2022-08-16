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
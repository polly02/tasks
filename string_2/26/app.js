// 26. На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если
// заканчивается, то вывести true, в противном случае false 

const str = "hschool.com".split(".");
if (str[str.length - 1] === 'com' || str[str.length - 1] === "ru") {
    console.log(true);
} else {
    console.log(false);
}
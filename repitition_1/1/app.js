// 1. На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

const a = "123@1@@34";
let b = ' ';
for (let i = 0; i<a.length; i++) {
    if (a[i] === "@") continue
    b += a[i];
}
console.log(b);
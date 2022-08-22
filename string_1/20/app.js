// 20.Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста 

let a = prompt("введите текст");

if (isNaN(a)) {
    console.log(a.split(""));
    console.log(a.split(" "));
    console.log(a.split(" ", 2));
} else {
    console.log("некорректный ввод");
}
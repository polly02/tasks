// 5. Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом
// числе цифр, а также положительное оно или отрицательное. Например, "Число " +
// num + " однозначное положительное". (length)

let a = prompt("введите число");

// if (!isNaN(a)) console.log(`${(+a > 0) ? "положительное" : "отрицательное"}\n${a.length}`);
// else console.log("не корректный ввод");

console.log(!isNaN(a) ? `${(+a > 0) ? "положительное" : "отрицательное"}\n${a.length}` : "не корректный ввод");
// 5. На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true 

const a = "hschool".toLowerCase().trim();
const b = "hschool".toLowerCase().trim();

if (isNaN(a) && isNaN(b)) {
    if (a === b) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("некорректный ввод");
}
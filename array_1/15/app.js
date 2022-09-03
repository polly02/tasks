// 14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

const arr = [10, 20, 30, 50, 235, 3000];
const arr_2 = [];
for (let i = 0; i < arr.length; i++) {
    let b = String(arr[i])
    if (b.startsWith("1") || b.startsWith("2") || b.startsWith("5")) {
        arr_2.push(+b)
    }
}
console.log(arr_2);
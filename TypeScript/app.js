// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
var arr = [
    { date: "10.01.2017" },
    { date: "05.11.2016" },
    { date: "21.12.2002" },
];
function sort(arr) {
    for (var j = arr.length - 1; j > 0; j--) {
        for (var i = 0; i < j; i++) {
            var day = arr[i].date.replaceAll(".", "").split(" ");
            var day2 = arr[i + 1].date.replaceAll(".", "").split(" ");
            if (day[0] > day2[0]) {
                var middle = arr[i].date;
                arr[i].date = arr[i + 1].date;
                arr[i + 1].date = middle;
            }
        }
    }
    return arr;
}
console.log(sort(arr));

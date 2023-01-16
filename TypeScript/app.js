// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
var array = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function wrapper(array) {
    var count = 0;
    var min = array[0].price;
    return function (elem) {
        count++;
        console.log("\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E : ".concat(count));
        elem.price < min ? min = elem.price : null;
        console.log("\u043C\u0438\u043D \u0446\u0435\u043D\u0430: ".concat(min));
    };
}
var wrap = wrapper(array);
for (var i = 0; i < array.length; i++) {
    wrap(array[i]);
}

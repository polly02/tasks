// 13. Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false

const a = "anna";
console.log(a === a.split("").reverse().join("") ? true : false);

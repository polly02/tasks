// Задача 15
// Безумный титан Танос собрал все 6 камней бесконечности и намеревается
// уничтожить половину населения Вселенной по щелчку пальцев. При этом если
// население Вселенной является нечетным числом, то титан проявит милосердие и
// округлит количество выживших в большую сторону. Помогите Мстителям
// подсчитать количество выживших.

let n = +prompt("Введите численность населения");
console.log(Math.ceil(n/2));
// 21. На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

const str = "Chris alan".trim();
let n = str.indexOf(" ");
    if (str[0] === str[0].toUpperCase() && str[n+1] === str[n+1].toUpperCase()){
        console.log(true);
    } else {
        console.log(false);
    }
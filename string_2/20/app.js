// 20.На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр (for)

const str = "one_ two_ three_   ".trim().replaceAll("_", "");
let result = "";
for (let i =0; i < str.length; i++){
    if (str[i-1] === " ") {
        result+= str[i].toUpperCase();
    } else {
        result +=str[i];
    }
}
console.log(result);
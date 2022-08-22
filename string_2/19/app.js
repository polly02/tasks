// 19. На вход программе подается строка. Преобразуйте первую букву каждого слова
// строки в верхний регистр (for)

const str = "avc sdf rsc".trim();
let result = "";
for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        result += str[i].toUpperCase();
    }

    if (str[i - 1] === " ") {
        result += str[i].toUpperCase();
    } else if (str[i - 1] !== " " && i !== 0) {
        result += str[i];
    }
}
console.log(result);
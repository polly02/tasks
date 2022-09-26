// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = "123_as-D";

function transformString(string) {
    try {
        const newStr = string.replaceAll(/[0-9]+/g, "")
        if (string.length === newStr.length) throw new Error("в строке только буквы")
        else return true
    } catch (error) {
        return error.message;
    }
}

console.log(transformString(str));
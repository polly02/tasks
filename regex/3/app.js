// 3. На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = "Polina Zdanovich student"

function checkStr(str) {
    try {
        const change = str.replaceAll(/ /g, "!")
        if (change.includes(" ")) throw new Error("вы ничего не изменили")
        return change
    } catch (error) {
        return error.message
    }
}

console.log(checkStr(str));
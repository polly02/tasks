// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const str = "https://github.com/Polina"

function checkURL(str) {
    try {
        if (!/^(http|https):\/\/[a-zA-Z]+\.[a-z]{1,3}\/[\w]+$/g.test(str)) throw new Error("error")
        return str
    } catch (error) {
        return error.message
    }
}
console.log(checkURL(str));
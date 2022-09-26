// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const pin = 123645;

function checkPin(pin) {
    try {
        // if (!(/^[\d]+$/g.test(pin) && (String(pin).length === 4||String(pin).length === 6))) throw new Error("неверная длина пинкода")
        if (!/^([\d]{4}$|[\d]{6}$)/g.test(pin)) throw new Error("error")
        return pin
    } catch (error) {
        return error.message
    }
}

console.log(checkPin(pin));
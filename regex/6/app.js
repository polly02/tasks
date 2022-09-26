// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const road = "C:\\Users\\Admin\\Desktop\\test.txt";

function checkRoad(road) {
    try {
        if (!/^[A-Z]{1}:\\[A-Za-z0-9]+\\[A-Za-z0-9]+\\[A-Za-z0-9]+\\[A-Aa-z0-9]+\.[a-z]{1,3}$/g.test(road)) throw new Error("не соответствует формату указания пути")
        return road
    } catch (error) {
        return error.message
    }
}

console.log(checkRoad(road));
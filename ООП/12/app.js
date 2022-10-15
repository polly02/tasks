// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
    doArr(n) {
        const arr = []
        for (let i = 0; i < n; i++) {
            arr[i] = prompt("enter words")
        }
        return arr
    }

    doHashtag(n) {
        const arr = this.doArr(n)
        const resArr = []
        for(let i = 0; i < arr.length; i++){
            resArr[i] = "#" + arr[i]
        }
        return resArr
    }
}

const hashtag = new Hashtag()
console.log(hashtag.doHashtag(+prompt("enter length of array")));
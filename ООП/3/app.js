// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной
// первую букву каждого слова этой строки

class WordString{
    constructor(string){
        this.string = string
    }

    reverseString(){
        return this.string.split("").reverse().join("")
    }

    upperFirst(){
        return this.string[0].toUpperCase() + this.string.slice(1)
    }

    upperEvery(){
        const arr = this.string.split(" ")
        let newArr = []
        for(let i = 0; i<arr.length; i++){
          newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }
        return newArr.join(" ")
    }
}

const wordString = new WordString("hello world")
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());

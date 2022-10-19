// 5. Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false 

class Word {
    isAnagram() {
        const btn = document.querySelector(".btn")
        btn.addEventListener("click", () => {
            const inp1 = document.querySelector(".inp1").value
            const inp2 = document.querySelector(".inp2").value
            if (inp1.split("").sort().join("") === inp2.split("").sort().join("")) {
                alert(true)
            } else {
                alert(false)
            }
        })
    }
}

const word = new Word()
word.isAnagram()
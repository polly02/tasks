// 4. Реализуйте класс Word, и функцию isPalindrome которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// палиндромом -> true, в противном случае false

class Word {
    isPalindrome() {
        const btn = document.querySelector(".btn")
        btn.addEventListener("click", () => {
            const input1 = document.querySelector(".inp1").value
            const input2 = document.querySelector(".inp2").value
            if (input1 === input1.split("").reverse().join("") && input2 === input2.split("").reverse().join("")) {
                alert(true)
            } else {
                alert(false)
            }
        })
    }
}

const word = new Word()
word.isPalindrome()
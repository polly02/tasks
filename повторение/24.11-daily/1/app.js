// 1. Посчитать количество гласных и согласных в строке

class Dom {
    constructor() {
        this.fillArray()
    }

    fillArray() {
        document.querySelector(".btn").addEventListener("click", () => {
           try {
               const mainString = document.querySelector(".input").value
               this.check(mainString)
               const glas = mainString.replaceAll(/[aeiuo]+/g, "")
               const soglas = mainString.length - glas.length
               document.querySelector(".res").innerHTML = `Количество гласных ${soglas}, количество согласных ${glas.length}`
            
           } catch (error) {
            alert(error.message)
           }
        })
    }
    check(mainString){
        if(/[\.\^\$\*()';;&!@#%:0-9]+/g.test(mainString)) throw new Error("error")
    }
}

const dom = new Dom()


// for (let i = 0; i < inp.length; i++) {
//     if (arrA.includes(inp[i])) {
//         countA++
//     } else if (arrB.includes(inp[i])) {
//         countB++
//     }
// }
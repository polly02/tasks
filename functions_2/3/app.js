// 2. Напишите функцию, принимающую в качестве параметра строку. Необходимо
// оставить в строке только униакльные символы. IIFE
// Позволяеткопироватьтекстиз -> позвляеткираьс

const str = "Позволяеткопироватьтекстиз".toLowerCase().split("");

function getUniqueSymbols(string) {
    let newString = []
    for(let i = 0; i< string.length; i++) {
        if(!newString.includes(string[i])) {
            newString.push(string[i])
        }
    }
    return newString.join("")
}

console.log(getUniqueSymbols(str));
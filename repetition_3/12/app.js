// 1. Реализуйте функцию, которая будет считать количество своих вызовов

function getNumber(){
    let count = 0
    return function(){
        count++
        return count
    }
}

const wrapper = getNumber()
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
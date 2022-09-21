// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

const nme = prompt("enter name");
const surname = prompt("enter surname");

function getName (name, surname){
    return `Привет, ${name} ${surname}`
}
console.log(getName(nme, surname));
// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

const email = "asd@.com";

function getEmail(mail) {
    const obj = {
        email: mail
    }
    if (mail.includes("@") && mail.endsWith(".com") || mail.endsWith(".ru")) {
        obj.active = true
        return obj 
    } else {
        obj.active = false
        return obj 
    }
}

console.log(getEmail(email));
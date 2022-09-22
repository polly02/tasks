// 7. Напишите функцию, генерирующую надежный пароль. (Math.random)

const n = 8; // length of password

function getPassword(pass) {
    let pas = []
    for (let i = 0; i < pass; i++) {
        pas.push(Math.round(Math.random() * 100))
    }
    return pas.join("")
}

console.log(getPassword(n));
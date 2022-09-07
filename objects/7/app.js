// 7. На вход статичный объект. Необходимо объект проверить на пустоту. Если же
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
// значение), то true

const obj = {
    // a: 1,
    // b: 3,
    // c: 2,
    // d: 4
}
let a = ""
for (const key in obj) {
    a = key
}
if (!a){
    console.log(false);
} else {
    console.log(true);
}
// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const html = `<div>
<!-- asdcf -->
<input>
<!-- ad1 -->`

function editCommit(file) {
    let a = /<!--[\w\.\*\(\)-_! ]+-->/g
    let n = file.replaceAll(a, "")
    return n
}

console.log(editCommit(html));
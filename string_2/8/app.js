// 8. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами

let a = 'aaa bbbbb ccc';
console.log(a.slice(a.indexOf("b"), a.lastIndexOf("b")) + "b");
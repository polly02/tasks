// 10. Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const a = prompt("");
let n = a.indexOf(" ");
console.log(`количество символов - ${a.length}\n${a.slice(n + 1)}\nиндекс 2ой подстроки ${n + 1}`);
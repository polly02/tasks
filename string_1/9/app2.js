// 1. На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const str = 'hSСhOol СomPAnY'.toLowerCase().trim();
let result = '';
for (let i = 0; i < str.length; i++) {
    if (a[i] !== " ") {
        result += a[i];
    }
}
console.log(`#${result}`);
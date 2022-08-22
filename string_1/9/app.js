// 9. На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const str = 'hSСhOol СomPAnY'.toLowerCase().split(" ").join("");
if (isNaN(str)) {
    console.log(`#${str}`);
}

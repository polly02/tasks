// 8. На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschoo

const str = 'hSСhOol'.toLowerCase();
if (isNaN(str)) {
    console.log(`#${str}`);
}
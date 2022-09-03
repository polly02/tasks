// 10. Задача на слово палиндром. 

const a = "mem";
if (a === a.split("").reverse().join("")) {
    console.log(true);
} else {
    console.log(false);
}
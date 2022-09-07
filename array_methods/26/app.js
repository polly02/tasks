// 6. Посчитать количество согласных в строке. В задаче необходимо хоть как-то
// затронуть forEach

const str = "Asd sdf ert tyu".trim().toLowerCase().split("");
const arr_v = ["a", "e", "y", "u", "i", "o"];
let chek = 0;

str.forEach(element => {
    if (arr_v.includes(element)){
        chek++
    }
});
console.log(chek);
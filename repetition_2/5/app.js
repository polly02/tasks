// 5. Реализуйте функцию, демонстрирующую работу бинарного поиска

function searchBin(n, arr) {
    let start = 0
    let end = arr.length
    let middle = Math.floor((start + end) / 2);
    for (let i = 0; i < arr.length; i++) {
        if (arr[middle] = n) return middle;
        else {
            if (arr[middle] < n) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
            middle = Math.floor((start + end) / 2);
        }
    }
    return middle
}

console.log(searchBin(5, [1, 4, 5, 6, 7, 7]))
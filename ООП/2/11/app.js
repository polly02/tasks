// 12. Реализуйте класс Sort, сдержащий метод sortData, сортирующий все числа
// статичного массива сортировкой пузырьком

class Sort {
    sortData(arr) {
        for( let j = arr.length - 1; j > 0; j--){
            for(let i = 0; i < j; i++){
                if(arr[i]>arr[i+1]){
                    let middleware = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = middleware
                }
            }
        }
        return arr
    }
}
const sort = new Sort()
console.log(sort.sortData([4, 7, 2, 0, -5, 9, 11, 3]));

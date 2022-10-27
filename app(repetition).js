// function sum() {
//     let sum = 0
//     return function(){
//         return ++sum
//     }
// }
// const wrapper = sum()
// console.log(wrapper());

// class Sum{
//     sum = 0
//     count(){
//         this.sum++
//         return this.sum
//     }
// }
// const sum = new Sum()
// console.log(sum.count()); 

// const obj = {
//     count: 0,
//     sum: function(){
//         return ++this.count
//     }
// }
// console.log(obj.sum());

// function factorial(n){
//     if(n<=1) return 1
//     return n*factorial(n-1)
// }
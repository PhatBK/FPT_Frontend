// // Bai 4.5
// const add_10 = (arr) => {
//     return arr.map( a => a+10);
// }
// // let arr = [5, 10, 15, 20, 25, 30];
// // console.log(arr);
// // console.log(add_10(arr));

// // Bai 4.4
// let arr = [
//             {
//             id: 1,
//             scores: [7, 8, 3, 4]
//             },
//             {
//             id: 2,
//             scores: [5, 10, 9, 6]
//             },
//             {
//             id: 3,
//             scores: [9, 7, 4, 8]
//             }
// ];

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const  add_sum = (arr) => {
//     let tmp = arr.map(a => a.scores);
//     let result = 0;
//     for(let it of tmp){
//         result += it.reduce(reducer);
//     }
//     return result;
// }
// // console.log(add_sum(arr));

// // Bai 4.3
//  let arr_3 = [1,2,3,4,5,6,7,8,9,10];

//  const get_random_arr = (arr) => {
//      let index = random_index(arr.length);
//      return arr[index];
//  }
//  const random_index = (max) => {
//     return Math.floor(Math.random()*max);
//  }
// console.log(get_random_arr(arr_3));

// // Bai 4.2

// let arr_4 = [1,2,3,4,5,6,7,8,8,8,9];
// let element = 8;

// const remove_one = (arr,element) => {
//     return arr.filter( a => a !== element);
// }
// // console.log(remove_one(arr_4,element));
// // console.log(remove_one([2, 5, 9, 6], 5));

// // Bai 4.1
// let test = [NaN, 0, 16, false, -21, '',undefined, 45, null, 9833,23,22,"",null,undefined,NaN];
// const check = (arr) => {
//     return arr.filter( a => {
//         if(a){
//             return a;
//         }
//     });
// };
// console.log(check(test));

  

// Bai 13
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let size= 2;
function chunkArrayInGroups(arr, size) {
    let result = [];
    let tmp = [];
    let div = arr.length/size;
    console.log(div);
    if(Number.isInteger(div)){
        let j = 0;
        for(let i = 0 ; i < div ; i++){
            // console.log(arr.slice(j,j+size));
            result.push(arr.slice(j,j+size));
            j += size;
        }
        // console.log(result);
        return result;
    }else{
        let j = 0;
        for( let i = 0 ; i < Math.floor(div) ; i ++){
            result.push(arr.slice(j,j+size));
            j += size;
        }
        result.push(arr.slice(Math.floor(div)*size,arr.length));
        // console.log(result);
        return result;
    }
}
// chunkArrayInGroups(arr, size)
// console.log(arr.slice(0,7));
console.log(chunkArrayInGroups(arr, 10));


// // Bai 12
// let arr = ["Mary", "Aarmy1234"];
// function mutation(arr) {
//     console.log(arr[0].toLowerCase());
//     console.log(arr[1].toLowerCase());

//     let count = 0;
//     let result = [];
//     let tmp_1 = arr[0].toLowerCase();
//     let tmp_2 = arr[1].toLowerCase();
//     for(let i = 0 ; i < tmp_2.length ; i++ ){
//         for(let j = 0 ; j < tmp_1.length ; j++ ){
//             if(tmp_2[i] === tmp_1[j]){
//                 count++;
//                 break;
//             }
//         }
//         console.log(count);
//     }
//     if(count == arr[1].length){
//         return true;
//     }
//     return false;
// }
// // console.log(mutation(arr));


// // Bai 11
// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// function getIndexToIns(arr, num) {
//     let count = 0;
//     return arr.filter( a => a < num).length;
// }
// // console.log(getIndexToIns(arr,11))


// // Bai 10
// let arr = ["phat",1,4,2,false, true, null, 0, NaN, undefined, "",9, NaN, "",10];
// console.log(arr);
// function bouncer(arr) {
//     return arr.filter(a =>
//                         (   a !== false && 
//                             a !== true &&
//                             !(a === NaN) &&
//                             a !== 0 &&
//                             a !== "" &&
//                             a !== null && 
//                             a !== undefined));
// }
// function bouncer(arr){
//     return arr.filter(a => a);
// }
// // console.log(bouncer(arr));

// // Bai 9
// let arr1 = [5,6,7];
// let arr2 = [1,2,3,4,8,9,10];
// function merge(arr1,arr2,index){
//         let result = [...arr2];
//         result.splice(index,0,...arr1);
//         return result;
// }
// // console.log(merge([1, 2, 3], [4, 5], 1));
// // console.log(merge([1, 2], ["a", "b"], 1));
// // console.log(merge(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// // console.log(merge(arr1, arr2, 1));


// // Bai 8
// let str = "I am A DeveLoper anD SysTem EngiNeEr, But I DON't Know IT's. Day one, I caN maKe it";
// // let str = "I'm a little tea pot";
// // let str = "sHoRt AnD sToUt";
// // let str = "HERE IS MY HANDLE HERE IS MY SPOUT";
// // ASCII: [a-z] = [97-122]
// // [A-Z] = [65-90]
// function normal(str){
//     let result = "";
//     // Tách từng từ khỏi câu
//     let tmp = "";
//     let arr = [];
//     for(let i = 0 ; i < str.length ; i++){
//         if(str[i] !== " "){
//             tmp += str[i];
//         }
//         if(str[i] === " " || (i === str.length - 1)){
//             if(tmp !== ""){
//                 arr.push(tmp);
//             }
//             tmp = "";
//         }
//     }
//     // Đối với mỗi từ, tiến hành sử lý:
//     for(let j = 0 ; j < arr.length ; j++){
//         let index = [];
//         for(let k = 0 ; k < arr[j].length ; k++){

//             let ind = arr[j][k].charCodeAt();
//             if(ind <= 90 && k !== 0 && ind !== 39 && ind !== 44 && ind !== 46){
//                 ind += 32;
//                 // arr[j][k] = String.fromCharCode(arr[j][k].charCodeAt() + 32);
//             }
//             if(ind >= 97 && k === 0 ){
//                 ind -= 32;
//             }
//             index.push(ind);
            
//         }
//         // console.log(index);
//         // console.log(String.fromCharCode(...index));
//         result += String.fromCharCode(...index);
//         if(j < arr.length -1){
//             result += String.fromCharCode(32);
//         }
//     }
//     return result;
// }
// // console.log(str);
// // console.log(normal(str));


// // Bai 7
// let arr = [1,,5,3,7];
// function findElement(arr, func){
//     let result;
//     for(let i = 0 ; i < arr.length ; i ++){
//         if(func(arr[i])){
//             result = arr[i];
//             break;
//         }
//     }
//     return result;
// }
// function func(num){
//     if(num % 2 === 0){
//         return num;
//     }else{
//         return false;
//     }
// }
// // console.log(findElement(arr,func));

// // Bai 6
// console.log(typeof true);
// function check(bool){
//     if(typeof bool === "boolean"){
//         return true;
//     }else{
//         return false;
//     }
// }
// // console.log(check(true));

// // Bai 5
// let str = "I am a developer and system engineer";
// let num = 10;
// function chunk_str(str, num){
//     if(str.length <= num){
//         return str;
//     }else{
//         let result = "";
//         for( let i = 0 ; i < num ; i++){
//             result += str[i];
//         }
//         result += "...";
//         return result;
//     }
// }
// // console.log(chunk_str(str, num));

// // Bai 4
// let str = "Phat";
// function repeat(str,num){
    
//     if( num <= 0){
//         return "";
//     }else{
//         let result =  "";
//         for(let i = 0 ; i < num ; i++){
//             result += str;
//         }
//         return result;
//     }
// }
// // console.log(repeat(str,8));

// // Bai 3
// let ar = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39],[23,-24,65],[12,543,5]];
// function max_arr(arr){
//     let result = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         result.push(Math.max(...arr[i]));
//     }
//     return result;
// }
// function max(arr){
//     let max = 0;
//     for( let j = 0 ; j < arr.length - 1 ; j++){
//         if(arr[j] <= arr[j+1]){
//             return max;
//         }
//     }
// }
// // console.log(max_arr(ar));

// // Bai 2
// let str = "I am a developer and system engineer";
// let check = "neer";
// function end_str(str,check){
//     console.log(str);
//     console.log(check);
//     let tmp = "";
//     let result = false;
//     for( let j = str.length - 1 ; j >=0 ; j--){
//         if(str[j] == " "){
//             break;
//         }
//         tmp += str[j];
//     }
//     if(tmp.length >= check.length){
//         let check_rev = reverser(check);
//         let count = 0;
//         for(let j = 0 ; j < tmp.length ; j ++){
//             if(tmp[j] === check_rev[j]  && (check_rev[j] !== undefined)){
//                 count ++;
//             }
//         }
//         if(count == check.length){
//             result = true;
//         }
//     }
//     return result;
// }
// function reverser(str){
//     let result = "";
//     for(let j = str.length -1 ; j >= 0 ; j--){
//         result += str[j];
//     }
//     return result;
// }
// // console.log(end_str(str,check));

// // Bai 1
// let str = "I am a developer and system engineer";
// str.replace(/^\s*|\s*$/g,"_");
// // console.log("   hom nay toi    ".replace(/^\s*|\s*$/g,"-"));
// console.log(str);
// let ar = [];
// let tmp = "";
// let last = 0;
// for( let i = 0; i < str.length; i++){
//     if(str[i] !== " "){
//         tmp += str[i];
//     }
//     if(str[i] === " " || (i == str.length -1)){
//         last++;
//         ar.push(tmp.length);

//         tmp = "";
//     }
// }



// // console.log(ar);
// // console.log(Math.max(...ar));
// // console.log(ar.filter((a,b) => a > b).pop());
// // console.log(last);
// // console.log([1,3,4,2,5,6,2,8].filter((a,b) => a > b).pop());
// // CallBack function
// // function high_func(a,check){
// //     for(let i = 0 ; i < a.length ; i++){
// //         if(check(a[i])){
// //             return a[i];
// //         }
// //     }
// //     return undefined;
// // }
// // function check(n){
// //     if(n%2 == 0){
// //         return true;
// //     }
// //     return false;
// // }
// // console.log(high_func([1,3,5,7,8],check));
// // function High_Fun(num){
// //     return function(num1){
// //         return num*num1;
// //     }
// // }
// // let call_back = High_Fun(10);
// // console.log(call_back(3));
// // console.log(call_back(10));


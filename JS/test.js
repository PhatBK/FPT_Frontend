// var a = [1,4,2,14,1,3,4,5,8,11,12,7,4,3,9,10,13,13,13,18,18,7,9];
// var max_1 = a[0];
// var max_2 = -1000;
// var max_3 ;
// var flag = false;

// for(var i = 0; i< a.length-1; i++){
  
//   if(max_1 > a[i+1]){
//     if(max_2<a[i+1]){
//       max_2 = a[i+1];
//       console.log(">"+max_2);
//     }
//   }
//   if(max_1 < a[i+1]){
//     max_2 = max_1;
//     max_1 = a[i+1];
//     flag = true;
//     console.log("<"+max_2);
//   }
  
//   if(flag){
//     max_3 = max_2;
//   }
// }
// console.log("First Max:"+max_1);
// console.log("Second Max:"+max_2);
// console.log("Third Max:"+max_3);
// var tmp;
// for( var j = 0 ; j < a.length; j++){
//   if(a[j] >= a[j+1]){
//     tmp = a[j];
//     a[j] = a[j+1];
//     a[j+1] = tmp;

//   }
// }
// console.log(a);
// for( var i = 0 ; i < a.length; i++){
//   for(var j = 0; j < a.length-1; j++){
//     if(a[i] < a[j+1]){
//       tmp = a[i];
//       a[i] = a[j];
//       a[j] = tmp;
//     }
//   }
// }
// console.log(a);
var x = 5;

const square = (a) => a*a ;

console.log(square(x));

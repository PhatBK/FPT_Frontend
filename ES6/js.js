let i = 0;
let j = 0;
console.log("i:"+ i++);
console.log("j:"+ ++j);
check = () => {
    console.log("i:"+ i++);
    console.log("j:"+ ++j);
}
check();
console.log("I:"+ i);
console.log("J:"+j);
console.log("----------------");
let arr = [0,1,2,3,4,5,6,7,8,9];
let arr1 = ["a","d","b","w","q","m"];
console.log(arr1.sort());
// splice : remove item
console.log(arr);
// console.log(arr.splice(0,arr.length));
// console.log(arr);
// slice : copy item
// console.log(arr.slice(1,2));
// console.log(arr);

console.log(arr.reverse());
console.log(arr.sort());
let demo = [1,2,3,4,5];
const max = (a,b) => Math.max(a,b);
const add = (a,b) => {
    console.log("a:"+a+" b:"+b);
    return (a+b);
}
console.log(demo);
console.log(demo.reduce(add));
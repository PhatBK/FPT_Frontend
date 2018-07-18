let set1 = new Set([1,2,3,4,5,6,7,8]);

let set2 = new Set([3,"a","4","b",4,5]);
console.log(set1);
console.log(set2);

let intersec = new Set([...set1].filter( x => set2.has(x)));
let minus = new Set([...set1].filter( x => !set2.has(x)));

console.log("Intersection: "+[...intersec]);
console.log("Minustion: "+[...minus]);

function count_rep(arr){
    let result = [];
    let set = new Set(arr);
    for(let i of set){
        let count = 0;
        for(let j of arr){
            if(i === j){
                count++;
            }
        }
        result.push(`${i}:${count}`);
    }
    return result;
}
console.log(count_rep([1,2,3,2,1,2,3,4,5,4,3,2,1,5,4,6,5,4,3,2,1,6]));

function new_count(arr,result){
    let pre = 0;
    let cur = arr[0];
    let count = 0;

    for(let i = 0 ; i < arr.length ; i++){
        if(cur === arr[i+1]){
            count++;
        }else{

        }
    }
}
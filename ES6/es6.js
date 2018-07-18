/*
Điều làm cho một cách duyệt hết tập hợp là cách nó đi qua tập hợp đó
- Các cách lặp thông thường cần tải toàn bộ dữ liệu để lặp lại nó
- Trong khi iterator  chỉ cần biết vị chí hiện tại trong tập cần duyệt

- interator cung cấp cách để duyệt qua danh sách
- generator cung cấp cách để xây dựng một danh sách



- Symbol.iterator. Phương thức này trả về một đối tượng iterator 
*/

// Ghep cặp
function* combos(list){
    let n = list.length;
    for( let i = 0 ; i < n -1 ; i++){
        for(let j = i+1; j < n ; j++){
            yield [list[i],list[j]];
        }
    }
}
let com = combos(["a","b","c","d","e"]);
// console.log(com.next());
/*
- for in : duyệt hết value của danh sách
- for of : duyệt hết interator của interable
*/
// for( let v of com){
//     console.log(v);
// }


// Tính số fibonacci
function* fibonacci(){
    let pre = 0;
    let cur = 1;
    yield pre;
    yield cur;
    while(true){
        [pre,cur] = [cur,cur+pre];
        yield cur;
        
    }
}
// let fib = fibonacci();
// let i = 0;
// while(i < 10){
//     i++;
//     console.log(fib.next());
// }

// check số nguyên tố

function isPrime(num){
    if(2 <= num){
        if(num === 2){
            return true;
        }
        for(let i = 2 ; i <= num/2 ; i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
    return false;
}
function* getNextPrime(){
    let nextPrime = 2;
    while(true){
        if(isPrime(nextPrime)){
            yield nextPrime;
        }
        nextPrime++;
    }
}
// let next_Prime = getNextPrime();
// console.log(next_Prime.next());

// tách từ trong câu:
function sentence(str){
    this._str = str;
}
sentence.prototype[Symbol.iterator] = function(){
    let reg = /\S+/g;
    let str = this._str;
    return {
        next() {
            let result = reg.exec(str);
            if(result){
                return {value:result[0],done:false};
            }
            return {value: undefined, done:true};
        }
    };
}
let sen = new sentence("Hom    nay    toi di    hoc     !");

// for(let s of sen){
//     console.log(s);
// }
// console.log([...sen])

// let arr = [1,2,3,4,5];
// let it = arr[Symbol.iterator]();
// console.log(typeof arr[Symbol.iterator]);
// console.log(it.next());
let getCountdownIterator = function(number){
    this._number = number;
}
getCountdownIterator.prototype[Symbol.iterator] = function(){
    let number = this._number;
    return {
        next(){
            if(1 <= number){
                return {value : number--, done: false};
            }
            return { value : undefined , done: true};
        }
    };
}
// let count_down = new  getCountdownIterator(9);
// console.log([...count_down]);

let arr = [11,22,55,44,66,88,33,22,34,1,222,4,246,-4,-6,1,1,3];
let iterators = arr[Symbol.iterator]();
function* filterGenerator(iterator,filterFunction){
    for(let it of iterator){
        if(filterFunction(it)){
            yield it;
        }
    }
}
// let fils = filterGenerator(iterators,x => x%2===0 && x > 0);
// for(let i of fils){
//     console.log(i);
// }


function count_d(n){
    let count = n;
    return {
        next() {
            if(1 <= count){
                return {value: count--, done:false};
            }
            return {value:undefined, done:true};
        }
    }
}
let dm = count_d(10);
// while(true){
//     let result = dm.next();
//     console.log(result.value);
//     if(result.done){
//         break;
//     }
    
// }

// sử dựng nhiều generator
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}
function* generatorParent(i){
    yield i + "Par";
    yield* anotherGenerator(i);
    yield i + "Another";
    yield* generator(i);
}
var gen = generatorParent(10);

let iterable = {
    name : "Phat",
    lastName : "Nguyen Huy",
    [Symbol.iterator]: function*(){
        yield this.name;
        yield this.lastName;
    }
};
for(let it of iterable){
    console.log(it);
}

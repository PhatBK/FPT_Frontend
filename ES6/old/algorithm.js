// const sumRange = (arr) => {
// 	let sum = 0;
// 	if (arr[0] > arr[1]){
// 		for(let i = arr[1] ; i <= arr[0] ; i++){
// 			sum += i;
// 		}
// 	}else if( arr[0] < arr[1]){
// 		for(let i = arr[0] ; i <= arr[1] ; i++){
// 			sum += i;
// 		}
// 	}else{
// 		sum = arr[0] + arr[1];
// 	}
// 	return sum;
// }
// console.log(sumRange([4,4]));

const diffArray = (arr1, arr2) => {
	let result = [];
	for(let i = 0 ; i < arr1.length ; i++){
		result.push(arr2.filter((arr) => arr !== arr1[i]));
	}
	return result;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
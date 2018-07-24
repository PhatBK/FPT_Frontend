// import fs from 'fs';
// import { rejects } from 'assert';

// fs.readFile("data/config1.json",'utf8',(err,data) => {
//     data = err ? null : (JSON.parse(data));
//     console.log(data);
// });


// let promise = new Promise((resolve,reject) => {
//     fs.readFile("data/config1.json",'utf8',(err,data) => {
//         if(err){
//             reject("Khong the doc file...");
//         }
//         resolve(JSON.parse(data));
        
//     });
// });

// promise.then(
//     (success) => {
//         console.log(success);
//     },
//     (error) => {
//         console.log(error);
//     }
// ).catch();

// // Read file ansyn su dung Promise
// const getData = (fileName, type) =>  {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, type, (err, data) => {
//         //if has error reject, otherwise resolve
//         return err ? reject(err) : resolve(data);
//         });
//     });
// };
// getData('data/config2.json', 'utf8')
//   .then(data => console.log('Data: ', data))
//   .catch(error => console.log('Error: ', error));
// let Client = require('node-rest-client').Client;

// let client = new Client();
// client.get("http://127.0.0.1:5000/api_get_data/monan", function (data, response) {
//             // parsed response body as js object
//             // console.log(data);
//             // raw response
//             console.log(response);
// });


// let promise_api = new Promise(
//     (resolve, reject) => {

//         // const request = new XMLHttpRequest();
//         // request.open("GET","http://127.0.0.1:5000/api_get_data/user");

//         let client = new Client();
       
//         client.get("http://127.0.0.1:5000/api_get_data/user", function (data, response) {
//             // parsed response body as js object
//             // console.log(data);
//             // raw response
//             if(data){
//                 resolve(data);
//             }else{
//                 reject(Error('No data...'));
//             }
//         });
//     }
// );
// console.log("Ansynchronous Request made...");

// promise_api.then(
//     (data) => {
//         console.log('Got data! Promise fulfilled.(resolve)');
//         console.log(data);
//     },
//     (error) => {
//         console.log('Promise rejected.');
//         console.log(error.message);
//     }
// );

function add_async(a,b){
    let promise = new Promise((resolve, reject) => {
        let c = a+b;
        resolve(b);
    });
    return promise;
}
add_async(10,20).then(
    (data) => {
        console.log(data);
    }
    (error) => {
        console.log("Errors...");
    }
);
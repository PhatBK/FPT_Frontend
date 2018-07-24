import fs from 'fs';
import { resolve } from 'dns';


// Tạo hàm đọc file kiểu bất đồng bộ
// Sủ dụng một đối tượng Promise để lưu kết quả khi kết thúc quá trình
const readFilePromise = (pathFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathFile,'utf8',(err, data) => {
            if(err){
                reject(new Error(err));
            }
            resolve(data);
        });
    });
};

let data1, data2, result;
const path1 = 'data/config1.json';
const path2 = 'data/config2.json';
const path3 = 'data/result.txt';

// sử dụng Promise.all()
Promise.all([
    readFilePromise(path1),
    readFilePromise(path2)
])
.then(
    (data) => {
        data1 = JSON.parse(data[0]);
        data2 = JSON.parse(data[1]);
        let result = [];
        for(let dt1 of data1){
            for(let dt2 of data2){
                if(dt1.env === dt2.env){
                    dt1.port = dt2.port;
                    result.push(dt1);
                }
            }
        }
        
        fs.writeFile(path3,JSON.stringify(result),(err) =>
            {
                if(err) throw err;
                console.log("saved..")
            }
        );
    },
    (err) => console.log(err+" ")
)
.catch(
    (err) => console.log(err)
)

















// let add = (a,b) => {
//     return new Promise((resolve , reject) => {
//         setTimeout(
//             () => {
//                 if(typeof a !== "number" || typeof b !== "number"){
//                     reject(new Error("Ban Can Nhap Tham So La Kieu Number.."));
//                 }
//                 resolve(a+b);
//             },0
//         );
//     });
// };

// add(10,"a").then(
//     (result) => console.log(result),
//     (err) => console.log(err +"")
// );

// import fs from 'fs';

// const path_file1 = "data/config1.json";
// const path_file2 = 'data/config2.json';
// const path_file3 = "data/config3.json";

// let promise = new Promise((resolve, reject) => {
//     fs.readFile(path_file1,'utf8',(err1, data1) => {

//         fs.readFile(path_file2,'utf8',(err2,data2) => {

//             fs.readFile(path_file3,'utf8',(err3, data3) => {
//                 resolve(data1 + data2 + data3);
//             });
//         });
//     });
// });

// promise.then(
//     (data) => console.log(data),
//     (err) => console.log(err)
// );
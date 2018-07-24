let fs = require('fs');

// const readFilePromise = (filename) => {
//     return new Promise((resolve,reject) => {
//         fs.readFile("js_es6_link.txt","utf8",(err,data) => {
//             err ? (reject(err)):(resolve(data));
//         });
//     });
// };

fs.readFile("data/config1.json","utf-8",(err,data) =>{

    // console.log(JSON.parse(data));
    data1 = err ? null : (JSON.parse(data));
    console.log(data1)
    fs.readFile("data/config2.json","utf8",(err2,data2) => {
        data2 = err2 ? null : JSON.parse(data2);
        console.log(data2);
        let result = [];
        for(let dt2 of data2){
           for(let dt1 of data1){
               if(dt1.env === dt2.env){
                   dt1.port = dt2.port;
                   result.push(dt1);
               }
           }
        }
        console.log(result);
        fs.writeFile("data/config3.json",JSON.stringify(result),(err) => {
            if(err) throw err;
            console.log("Save");
        })
    });
    
});

const fs = require('fs');

fs.rename('data/result.txt','data/result1.json',(err) => {
    if(err){
        console.log(new Error(err));
    }else{
        console.log("Renamed ..");
    }
    
}
);
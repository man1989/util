const fs = require("fs");

let readDir => (dirPath, cb){
    fs.readdir(dirPath, (err, files) => {
        var results = [];
        var count = files.length;
        files.forEach((file) => {
            let filePath = dirPath+"/"+file;
            fs.stat(filePath, (err, stats)=>{
                if(stats.isDirectory()){
                    readDir(filePath, (err, data) => {
                        results = results.concat(data);
                        if(!--count)cb(null, results);
                    });
                }else{
                    results.push(file);
                    if(!--count)cb(null, results);
                }
            });
        });
    });
}
const fs = require("fs");

function readDirSync(dirPath){
    let files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        let filePath = dirPath+"/"+file;
        let stats = fs.statSync(filePath);
        if(stats.isDirectory()){
            files = files.concat(readDirSync(filePath));
        }
    });
    return files;
}
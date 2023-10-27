const fs = require('node:fs');
fs.writeFile("myNewFile.txt", "hellow from node module native", (err) => {
    if (err) {
        throw err;
    }
    console.log("the file has been saved");
});


fs.readFile("./myNewFile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
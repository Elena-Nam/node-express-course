const { writeFile } = require("fs");
console.log("at start");

writeFile("./temporary/fileB.txt", "This is line 1\n", (err) => {
    console.log("at point 1");
    if (err) {
        console.log("This error happened: ", err);
    } else {
        writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: 'a' },(err) => {
            console.log("at point 2");
            if (err) {
                console.log("This error happened: ", err);
            } else {
                writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: 'a' }, (err) => {
                    console.log("at the last point");
                    if (err) {
                        console.log("This error happened: ", err);
                    } else {
                        console.log("All stages have been done")
                    }
                });
            }
        });
    
    }
});

console.log("at end");
console.log('this task is finished too')
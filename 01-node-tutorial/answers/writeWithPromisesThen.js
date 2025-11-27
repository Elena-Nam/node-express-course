const { writeFile, readFile } = require("fs").promises;
writeFile('./temporary/temp.txt', 'week 2:\n',
        { flag: 'a' })
    .then (() => {return writeFile('./temporary/temp.txt', '1.THEN\n',
        { flag: 'a' })
    })
    .then (() => {return writeFile('./temporary/temp.txt', '2.Promises\n',
        { flag: 'a' })
    })
    .then (() => {return readFile('./temporary/temp.txt', 'utf8')
    })
    .then ((result) => console.log(result)
    )
    .catch((error) => {  
     console.log("An error occurred: ", error)  
 }) 
const { writeFile, readFile } = require("fs").promises;

const writer = async() => {
try { 
    await writeFile('./temporary/temp.txt', 'week 2:\n',
        { flag: 'a' })
    await writeFile('./temporary/temp.txt', '1.Promises.\n',
        { flag: 'a' } )
    await writeFile('./temporary/temp.txt', '2.Async/ await.\n',         
    { flag: 'a' })
} catch (err) {
    console.log(err)
}
}

const reader = async() => {
try { 
    const result = await readFile ('./temporary/temp.txt', 'utf8')
    console.log(result)
} catch (err) {
    console.log(err)
 } 
}

const readWrite = async() => {
try { 
    await writer();
    await reader(); 
} catch (err) {
    console.log(err);
} 
}

readWrite();
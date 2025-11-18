const today = new Date().toLocaleDateString('en-CA');
if (today > "2025-11-17") {
    console.log( `Today is ${today}. The deadline!!!`)
}
else {
   console.log(`Today is ${today}. You need to do the assignment!`) 
}

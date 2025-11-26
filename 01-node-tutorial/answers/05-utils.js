const now = new Date();
const hours = now.getHours();

const greeting = (name) => {
    if (hours < 12) {
        console.log(`Good morning, ${name}!`);
    }
    else if (hours >= 12 && hours < 18) {
        console.log(`Good afternoon, ${name}!`)
    }
    else {
        console.log(`Good evening, ${name}!`)
    }
}

console.log(module)
module.exports =  greeting
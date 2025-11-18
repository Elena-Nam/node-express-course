fahrenheit = 100;

function toCelcius() {
    celsius = Math.round((fahrenheit - 32) * 5/9)
    console.log(`${fahrenheit}F is ${celsius} C`) ;
}
toCelcius()
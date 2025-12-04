const EventEmitter = require('events')
// 1
const customEmitter = new EventEmitter()
customEmitter.on('playerJoined', (name) => {
  console.log(`Player ${name} joined`)
})
customEmitter.on('scoreUpgraded', (name, score) => {
  console.log(`${name}'s score is ${score}`)
})
customEmitter.on('gameOver', () => {
  console.log(`Game Over!`)
})
customEmitter.emit('playerJoined', 'John')
customEmitter.emit('scoreUpgraded', 'John', 100)
customEmitter.emit('gameOver')

// 2  
const emitter = new EventEmitter();  
const waitForEvent = () => {  
  return new Promise((resolve) => {  
    emitter.on("happens", (msg) => resolve(msg));  
  });  
};  
const doWait = async () => {  
  const msg = await waitForEvent();  
  console.log("We got an event! Here it is: ", msg);  
};  
doWait();  
emitter.emit("happens", "Hello World!");  
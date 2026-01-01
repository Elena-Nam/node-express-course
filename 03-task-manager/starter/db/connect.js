const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
}

module.exports = connectDB


// mongoose.connect(process.env.MongoDBUrl,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("\n CONNECTED TO DB..."))
// .catch((err) => console.log(err))
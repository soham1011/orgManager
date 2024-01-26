const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sohammarothi10:lEJwysLZd7pRK9Kb@cluster0.wtvwr48.mongodb.net/?retryWrites=true&w=majority")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String

})



const staffSchema = new mongoose.Schema({
    department: String,
    name: String,
    age: String,
    gender: String
})
const User = mongoose.model('User',userSchema)
const Staffscheme = mongoose.model('Staffscheme',staffSchema)

module.exports = {
    User,
    Staffscheme
};












// mdb pass = lEJwysLZd7pRK9Kb
// mdb user = sohammarothi10
const mongoose = require('mongoose');

const packages = new mongoose.Schema({
    image:{type:String , required:true},
    destination:{type:String , required:true},
})

module.exports = mongoose.model('Packages', packages);
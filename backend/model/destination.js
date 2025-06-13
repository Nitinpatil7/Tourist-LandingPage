const mongoose = require('mongoose');

const destionationschema = new mongoose.Schema({
    image:{type:String , required:true},
    destination:{type:String , required:true},
    price:{type:Number , required:true},

})

module.exports = mongoose.model('Destination', destionationschema);
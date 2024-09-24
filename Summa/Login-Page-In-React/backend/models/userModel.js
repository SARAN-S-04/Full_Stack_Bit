const mongoose = require("mongoose");
const Schema1 = mongoose.Schema({
    PID:{
        type:Number,
        require:true,
    },
    marks:{
        type:Number,
        require:true
    }
})
const DataModel = new mongoose.model('UserData',Schema1);
module.exports = DataModel;
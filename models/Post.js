const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:         {
        type:String
    },
    company:      {
        type:String
    },
    
    city:         {
        type:String
    },
    email:        {
        type:String
    },
    birthdate:    {
        type:Date,
        default: new Date
    },
    workphone:    {
        type:Number
    },
    personalphone:{
        type:Number
    },
    adress:       {
        type:String
    },
});

module.exports = mongoose.model('Posts', PostSchema);
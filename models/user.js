var mongoose=require('../db/mongoose');

var user=mongoose.model('User',{
    username:{
        type: String,
        required: true,
        minlenght:1,
        trim:true
    },
    password:{
        type: String,
        required: true,
        default: false,
        minlenght:1
    }
});

module.exports = user;
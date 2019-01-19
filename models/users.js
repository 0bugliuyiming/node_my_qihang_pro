var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ke_qq',{useNewUrlParser: true});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    mobile:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    created_time:{
        type: Date,
        default: Date.now
    },
    avatar:{
        type:String,
        default: "/images/ke_qq/empty-avator.png"
    }
});

var User = mongoose.model('User',userSchema);
module.exports = User;
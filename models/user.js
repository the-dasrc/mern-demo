const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create new schema for user
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    }
});

//create model for user
const User = mongoose.model('user', UserSchema);

module.exports = User;
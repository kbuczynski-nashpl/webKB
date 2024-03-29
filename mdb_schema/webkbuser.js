let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let webkbuser = new Schema({
    user_username: String,
    user_psw: String,
    user_forname: String,
    user_surname: String,
    user_dob: String,
    user_email: String,
    user_permission: Array,
    user_email_validated: Boolean,
    user_secret_q: String,
    user_secret_p: String
});

module.exports = mongoose.model('webkbuser', webkbuser);
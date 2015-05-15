var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('user', UserSchema);

module.exports = User;

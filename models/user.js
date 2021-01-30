const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  name: String,
  videos: [Schema.Types.ObjectID],
  playlists: [Schema.Types.ObjectID],
  subsciptions: [Schema.Types.ObjectID],
  notifications: [Schema.Types.ObjectID],
  followers: {type: Number, default: 0},
  email: String,
  password: String
});

UserSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    })
  })
});

UserSchema.methods.validPassword =  function(candidatePassword) {
  const isMatch = bcrypt.compareSync(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model('User', UserSchema);

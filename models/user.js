const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  videos: [Schema.Types.ObjectID],
  playlists: [Schema.Types.ObjectID],
  subsciptions: [Schema.Types.ObjectID],
  notifications: [Schema.Types.ObjectID],
  followers: Number,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);

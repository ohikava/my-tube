const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  duration: String,
  author: Schema.Types.ObjectID,
  date: String,
  views: {
    type: Number,
    default: 0
  },
  comments: {
    type: [Schema.Types.ObjectID],
    default: []
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model('Video', videoSchema);

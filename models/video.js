const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  duration: String,
  author: {
    id: Schema.Types.ObjectID,
    name: String
  },
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
  },
  description: String,
  keywords: [String]

});

module.exports = mongoose.model('Video', videoSchema);

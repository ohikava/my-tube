const Video = require("../models/video");
const User = require('../models/user');

const root = {
  getVideo: async ({id}) => {
    const result = await Video.findById(id);
    return result;
  },
  getVideos: async() => {
    const result = await Video.find({});
    return result;
  },
  addVideo: async ({input}) => {
    try {
    const newVideo = new Video({...input})
    const result = await newVideo.save();
    return result;
  } catch (err) {
    console.error(err);
  }
},
  addUser: async ({input}) => {
    try {
      const newUser = new User({...input});
      const result = await newUser.save();
      return result;
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = root;

const Video = require("../models/video");
const User = require('../models/user');

const root = {
  getVideo: async ({id}) => {
    const result = await Video.findById(id);
    const user = await User.findById(result.author.id);
    result.author.followers = user.followers;
    return result;
  },
  getVideos: async() => {
    try {
    let result = await Video.find({});
    return result;
    return result;
  } catch(err) {
    console.error(err);
  }
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
  },
  getRecommendations: async ({keys}) => {
    try {
      const result = await Video.find({keywords: {$in: keys}});
      return result;
    } catch (error) {
      console.error(error);
    }
  },
  searchVideo: async ({search}) => {
    try {
      const result = await Video.aggregate([{
        "$search": {
          "autocomplete": {
            "path": "title",
            "query": `${search}`,
            "fuzzy": {
              "maxEdits": 2
            }
          }
        }
      }]).limit(5);
      result.forEach((item, i) => {
        item.id = item._id;
      });

      return result;
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = root;

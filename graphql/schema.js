const {buildSchema} = require("graphql");

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    videos: [ID]
    notifications: [ID]
    followers: Int
    playlists: [ID]
    subscriptions: [ID]
    email: String
  }
  input UserInput {
    name: String
    videos: [ID]
    notifications: [ID]
    subscriptions: [ID]
    followers: Int
    playlists: [ID]
    email: String
    password: String
  }
  type ShortUser {
    name: String,
    id: ID
  }
  input ShortUserInput {
    name: String,
    id: ID
  }
  type Video {
    id: ID
    title: String
    duration: String
    author: User
    date: String
    views: Int
    comments: [ID]
    likes: Int
    dislikes: Int
    description: String
    keywords: [String]
  }
  input VideoInput {
    title: String
    duration: String
    author: ShortUserInput
    date: String
    views: Int
    comments: [ID]
    likes: Int
    dislikes: Int
    keywords: [String]
  }
  type Mutation {
    addVideo(input: VideoInput): Video
    addUser(input: UserInput): User
  }
  type Query {
    getVideo(id: ID!): Video
    getUser(id: ID!): User
    getVideos:  [Video]
    getRecommendations(keys: [String]!): [Video]
  }
  `);

module.exports = schema;

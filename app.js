const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const {graphqlHTTP} = require('express-graphql');
const morgan = require('morgan');

const root = require('./graphql/root');
const schema = require("./graphql/schema");

require("dotenv").config();
require('./passportConfig');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xynvl.mongodb.net/${process.env.DB_BASENAME}?retryWrites=true&w=majority`

mongoose.connect(uri, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Successful connection to the DataBase")
});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  rootValue: root
}));
app.use(passport.initialize());

app.use('/auth', require('./routes/auth.js'));
app.use('/user', require('./routes/user.js'));

app.listen(5000);

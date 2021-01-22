const passport = require('passport');
const User = require('./models/user');
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async function (email, password, done) {
      try {
        const possibleUser = await User.findOne({email: email});
        if(!possibleUser || !possibleUser.validPassword(password)) {
          return done(null, false, {message: 'Such user doesnt exist'});
        }
        console.log(possibleUser)
        const user = possibleUser;
        return done(null, user);
    } catch (err) {
        return done(err);
    }
    }
));

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_KEY;

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  User.findOne({id: jwt_payload.sub}, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
}));

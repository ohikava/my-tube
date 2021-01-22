const express = require("express");
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
  const {email, name, password, password2} = req.body;

  const existEmail = await User.find({email: email});
  if(existEmail.length) {
    res.send({
      type: 'error',
      message: 'email already have been registred'
    });
    return;
  };
  const existName =  await User.find({name: name});
  if(existName.length) {
    res.send({
      type: 'error',
      message: 'name already have been registred'
    })
  };

  if(password !== password2) {
    res.send({
      type: 'error',
      msg: 'password 1 is not equal password 2'
    });
  };

  const newUser = new User({
    name: name,
    password: password,
    email: email
  });

  const result = await newUser.save();
  res.send({
    type: 'success',
    msg: 'user have been successfully saved'
  })
} catch (err) {
  console.error(err);
}
});

router.post('/login', (req, res) => {
  passport.authenticate('local', {session: false}, (err, user,info) => {
    if(err || !user) {
      return res.send({
        message: "something went wrong",
        err: err,
        user: user
      })
    }

    req.login(user, {session: false}, (err) => {
      if (err) {
        return res.json(err);
      }
      const body = { id: user._id, email: user.email, name: user.name};

      const token = jwt.sign({
        user: body
      }, process.env.JWT_KEY, {expiresIn: '1h'});

      return res.json({
        token: token
      });

    })
  })(req, res)
});

router.get('/forverifieduser', passport.authenticate("jwt",{session: false}), (req, res) => {
  res.json({
    message: "you made it",
    user: req.user
  })
})


module.exports = router;

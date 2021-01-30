const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/subscriptions/getShort', passport.authenticate('jwt', {session: false}), (req, res) => {
  let subscriptions;
  subscriptions = req.user.subsciptions;
  if(subscriptions.length > 5) {
    subscriptions = subscriptions.slice(-5);
  }
  if(subscriptions.length === 0) {
    return res.send({
      subs: []
    })
  }
  tasks = subscriptions.map(i => User.findById(i));
  Promise.all(tasks).then(values => {
    res.send({
      subs: values.map(i => {
        return {
          id: i._id,
          body: i.name
        }
      })
    })
  }).catch(err => console.error(err));

});

router.get('/subscriptions/getAll', passport.authenticate('jwt', {session: false}), (req, res) => {
  const subscriptions = req.user.subsciptions;
  if(subscriptions.length === 0) {
    return res.send({
      subs: []
    })
  }
  tasks = subscriptions.map(i => User.findById(i));
  Promise.all(tasks).then(values => {
    res.send({
      subs: values.map(i => {
        return {
          id: i._id,
          body: i.name,
          followers: i.followers
        }
      })
    })
  }).catch(err => console.error(err));

})
router.get('/subscriptions/subscribe/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
  const {id} = req.params;
  await User.update({_id: id}, {$inc: {followers: 1} })
  const result = await User.update({_id: req.user._id}, {$push: { subsciptions: id}});
  res.send(result);
} catch (err) {
  console.error(err);
}
});

router.get('/subscriptions/unsubscribe/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const {id} = req.params;
    await User.update({_id: id}, {$inc: {followers: -1} })
    const result = await User.update({_id: req.user._id}, {$pull: { subsciptions: id}});
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

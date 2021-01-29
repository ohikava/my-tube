const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/subscriptions/getShort', passport.authenticate('jwt', {session: false}), (req, res) => {
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
          body: i.name
        }
      })
    })
  }).catch(err => console.error(err));

});

router.get('/subsciptions/subscribe/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
  const {id} = req.params;
  const result = await User.update({_id: req.user._id}, {$push: { subsciptions: id}});
  res.send(result);
} catch (err) {
  console.error(err);
}
})
module.exports = router;

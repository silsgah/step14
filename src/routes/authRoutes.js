const express = require('express');
const {
  MongoClient,
} = require('mongodb');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router() {
  // This time we are using the Post method for posting the data to the server
  authRouter.route('/signUp')
    .post((req, res) => {
      debug(req.body);
      req.login(req.body, () => {
        res.redirect('/auth/profile');
      });
      //res.json(req.body);
    });
    authRouter.route('/profile')
    .get((req, res) => {
      res.json(req.user);
    });
  return authRouter;
}

module.exports = router;

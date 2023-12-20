const passport = require('passport');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.status(401).json({ message: 'Invalid credentials' }); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      const token = jwt.sign({ _id: user._id, username: user.username, role: user.role }, JWT_SECRET);
      return res.json({ token });
    });
  })(req, res, next);
};

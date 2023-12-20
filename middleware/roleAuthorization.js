const roleAuthorization = (role) => {
    return (req, res, next) => {
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.status(403).json({ message: 'Unauthorized' });
      }
    };
  };
  
  module.exports = roleAuthorization;
  
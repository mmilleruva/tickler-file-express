module.exports = function(req, res, next){
  if (req.user) {
    console.log("User here")
    return next();
  }
  res.redirect('/login');
};

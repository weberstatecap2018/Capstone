module.exports = function(app){
    app.all("*", function(req, res, next){
      app.locals.loggedIn = req.session && req.session.userId ? true : false;
      next();
    });
    app.use('/', require('../Backend/controllers/index.controller'));
  }
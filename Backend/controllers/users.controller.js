// let express = require('express');
// let router = express.Router();
// // const requireLogin = require("../helpers/require_login");
// let { User } = require("../models/schemas");

// router.get('/',  function (req, res, next) {
//   console.log(" from users ");
//   User.find().exec((err, users) => {
//     console.log(users);
//     res.render('layout', { title: 'Your Projects', content: "projects" });
//   })
// });

// router.get('/new', function (req, res, next) {
//   res.render('layout', { title: 'Create Your Account', content: "users/new", errors: {}, user: {} });
// });

// router.post('/create', function(req, res, next) {
//   new User(req.body).save((err) =>{
//       if(err){
//         res.render('layout', { title: 'Create Your Account', content: "users/new", errors: err.errors, user: req.body });
        
//       }else {
//         req.flash('success', "User has been created successfully.");
//         res.redirect(301, "/projects/");
//       }
//   })
// });




// module.exports = router;
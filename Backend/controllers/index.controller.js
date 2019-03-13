let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
  res.render('layout', { title: 'Final Project', 
  content: "../../Frontend/capstone/src/app/qustion-forum/question-forum.component.html", });
});


module.exports = router;
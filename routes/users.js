var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {
	res.render('usersAll', {
		'title': 'Users'
	});
});

router.get('/register', function(req, res, next) {
	res.render('register',{
		'title': 'Register'
	});
});

router.get('/login', function(req, res, next){
	res.render('login',{
		'title': 'LogIn'
	});
});

module.exports = router;

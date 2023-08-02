const express = require('express');
const router = express.Router();
const { User } = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 10;



//////passport///////////////////
passport.use(new LocalStrategy(
  {
    usernameField: 'email', 
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
// User registration////////////////////////////////////////
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user with hashed password
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword, // save hashed password
    });

    res.redirect('/login');
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Registration failed' });
  }
});



// User login//////////////////////////////////////
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    // Check if user exists and password is correct
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userId = user.id;
      res.redirect('/profile');
    } else {
      res.redirect('/login?error=1');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Login failed' });
  }
});

router.get('/login', function(req, res) {
  res.render('login'); 
});

router.get('/register', function(req, res) {
  res.render('register');  
});

module.exports = router;

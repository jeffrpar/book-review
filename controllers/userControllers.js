const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
  

// GET from /api/users
router.get('/', (req, res) => {
  User.findAll({
      attributes: { exclude: ['password']}
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
      console.log(err); 
      res.status(500).json(err);
  });
});

// GET from a specific user EXAMPLE: /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST/CREATE a new user.
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = req.body.username;
      res.status(200).json(dbUserData);
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    })

    if (!dbUserData) {
      res.status(400).json({
        message: 'Incorrect email or password. Please try again!'
      });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: 'Incorrect email or password. Please try again!',
      });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = req.body.username;

      res.status(200).json({
        user: dbUserData, message: 'You are now logged in!'
      });
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // Session destroyed once user logout
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();  
  }
});


module.exports = router;

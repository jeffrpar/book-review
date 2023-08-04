const router = require('express').Router();
const { Author, Book, User } = require('../models');

// GET all books for homepage
router.get('/', async (req, res) => {
  try {
    const dbBookData = await Book.findAll({
      include: [
        {
          model: Author,
          attributes: ['id', 'author_name'],
        },
      ],
    });

    const books = dbBookData.map((book) =>
      book.get({ plain: true })
    );

    res.render('homepage', {books, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
      res.redirect('/');
      return; 
  }
  res.render('login');
});

router.get('/profile', async (req, res) => {
  if(!req.session.loggedIn) {
      res.redirect('/login');
      return; 
  }

  // User.findOne({
  //   attributes: { exclude: ['password'] },
  //   where: {
  //     email: req.session.email
  //   },
  // })
  //   .then(dbUserData => {
  //     // serialize DATA
  //     const user = dbUserData.map(user => user.get({ plain: true }));
  //     res.render('profile', { user, loggedIn: true });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });

  res.render('profile');
});

module.exports = router;
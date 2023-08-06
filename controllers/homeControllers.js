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

router.get('/profile', (req, res) => {

  if(!req.session.loggedIn) {
    res.redirect('/login');
    return; 
}

  
  res.render('profile', {user: req.session.user , loggedIn: req.session.loggedIn});

  
});

module.exports = router;
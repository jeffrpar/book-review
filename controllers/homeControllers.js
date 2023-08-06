const express = require('express');
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

// Search route
router.get('/search', async (req, res) => {
  try {
    const searchQuery = req.query.search;

    if (!searchQuery) {
      // If no search query, render the homepage with all books
      const dbBookData = await Book.findAll({
        include: [
          {
            model: Author,
            attributes: ['id', 'author_name'],
          },
        ],
      });

      const books = dbBookData.map((book) => book.get({ plain: true }));

      return res.render('homepage', { books, loggedIn: req.session.loggedIn });
    }

    // If there's a search query, find the book based on the title
    const dbBookData = await Book.findOne({
      where: { title: searchQuery },
      include: [
        {
          model: Author,
          attributes: ['id', 'author_name'],
        },
      ],
    });

    if (!dbBookData) {
      // If the book is not found, display an error message
      return res.render('book-not-found', { loggedIn: req.session.loggedIn });
    }

    // Render the book details page and pass the book details object to the template
    const bookDetails = dbBookData.get({ plain: true });
    res.render('book-description', { bookDetails, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
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
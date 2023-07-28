const router = require('express').Router();
const { Book, User } = require('../models');

// GET all books for homepage
router.get('/', async (req, res) => {
  try {
    const dbBookData = await Book.findAll({
      include: [
        {
          model: Book,
          attributes: ['id', 'title'],
        },
      ],
    });

    const books = dbBookData.map((book) =>
      book.get({ plain: true })
    );

    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
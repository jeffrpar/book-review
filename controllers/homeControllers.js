const router = require('express').Router();
const { Author, Book } = require('../models');

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

    res.render('homepage', {
      books,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
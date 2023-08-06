const express = require('express');
const router = express.Router();
const { Book, Author, Genre } = require('../models');

/////////////////////////////////////////////////////////////
//////////////// GET Methods for books. /////////////////////
/////////////////////////////////////////////////////////////

router.get('/', async (req, res) => {
    // Try and catch an error just in case.
    try {
        // Finds all the books.
        const bookData = await Book.findAll({
            include: [
                {
                    model: Author,
                    attributes: ['id', 'author_name'],
                },
            ],
        });
        // Serialize the data.
        const books = bookData.map((book) =>
            book.get({ plain: true })
        );

        // Renders the data to the book template.
        res.render('homepage', { books });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {


    try {
        const bookData = await Book.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: Author,
                    attributes: ['id', 'author_name'],
                },
                {
                    model: Genre,
                    attributes: ['id', 'genre_name'],
                },
            ],
        });

        if (!bookData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }

        const bookDetails = bookData.get({ plain: true });

        res.render('book-description', { bookDetails }); // Pass the data as an object, not directly as book.

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


/////////////////////////////////////////////////////////////
//////////////// POST Methods for books. ////////////////////
/////////////////////////////////////////////////////////////

router.post('/', async (req, res) => {
    // Create a new Book.---( Just in Case )---
    try {
        const newBook = await Book.create({
            title: req.body.title,
            book_cover: req.body.book_cover,
            book_date: req.body.book_date,
            author_id: req.body.author_id,
            genre_id: req.body.genre_id,
        });
        console.log(newBook)
        res.status(200).json(newBook)
    } catch (err) {
        res.status(400).json(err);
    }


});

/////////////////////////////////////////////////////////////
/////////////// DELETE Methods for books. ///////////////////
/////////////////////////////////////////////////////////////

router.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        },
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No book found with the provided ID' });
                return;
            }
            res.json(data);


        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

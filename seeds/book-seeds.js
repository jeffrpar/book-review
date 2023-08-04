// Require/Deconstruct the genre model
const { Book } = require('../models');

// Creates an array of genres to then populate the database.
const bookData = [
    {
        title: `THE BOOK EATERS`,
        book_cover: '/images/book-easter.jpg',
        book_date: '06/27/2023',
        author_id: 1,
        genre_id: 1,
        pages: '304 pages',
        Language: 'English',
        about: 'In Sunyi Deans debut, beings who consume books to survive hide on the fringes of society. It sounds like a fairy tale, but its actually a nightmare',
        amazon_link:'https://www.amazon.com/Audible-The-Book-Eaters/dp/B09GGXL8D9/ref=sr_1_1?crid=2499WL8N816H3&keywords=THE+BOOK+EATERS&qid=1691090899&sprefix=the+book+eaters%2Caps%2C273&sr=8-1'
        
    },
    {
        title: `Elon Musk (Signed Book)`,
        book_cover: '/images/elon-musk.jpg',
        book_date: '09/12/2023',
        author_id: 2,
        genre_id: 2,
        amazon_link: 'https://www.amazon.com/Elon-Musk-Ashlee-Vance-audiobook/dp/B00UVY52JO/ref=sr_1_1?crid=1A5LCGCNAEDI6&keywords=Elon+Musk+%28Signed+Book%29&qid=1691081084&sprefix=elon+musk+signed+book+%2Caps%2C605&sr=8-1'
    },
    {
        title: `It's a Small World`,
        book_cover: '/images/small-world.jpg',
        book_date: '01/05/2021',
        author_id: 3,
        genre_id: 3,
        amazon_link:'https://www.amazon.com/Small-Disney-Classic-Little-Golden/dp/073644131X/ref=sr_1_2?crid=1ZWPZLMNJPH92&keywords=It%27s+a+Small+World&qid=1691090955&sprefix=it%27s+a+small+world%2Caps%2C181&sr=8-2'
    },
    {
        title: `Can't Hurt Me`,
        book_cover: '/images/cant-hurt-me.jpg',
        book_date: '01/05/2021',
        author_id: 4,
        genre_id: 3,
        amazon_link:'https://www.amazon.com/Cant-Hurt-Me-David-Goggins-audiobook/dp/B07KKP62FW/ref=sr_1_1?crid=1RHQVBNFWTCP9&keywords=title%3A+%60Can%27t+Hurt+Me%60%2C&qid=1691091070&sprefix=title+can%27t+hurt+me+%2C%2Caps%2C180&sr=8-1'
    },
    {
        title: `Atomic Habits`,
        book_cover: '/images/atomic-habits.jpg',
        book_date: '01/05/2021',
        author_id: 5,
        genre_id: 3,
    },
    {
        title: `American Prometheus`,
        book_cover: '/images/american-prometheus.jpg',
        book_date: '01/05/2021',
        author_id: 6,
        genre_id: 3,
    },
    {
        title: `Fourth Wing`,
        book_cover: '/images/fourth-wing.jpg',
        book_date: '01/05/2021',
        author_id: 7,
        genre_id: 3,
    },
    {
        title: `Lessons in Chemistry`,
        book_cover: '/images/lesson-chemestry.jpg',
        book_date: '01/05/2021',
        author_id: 8,
        genre_id: 3,
    },
    {
        title: `The Covenant of Water`,
        book_cover: '/images/covenant-water.jpg',
        book_date: '01/05/2021',
        author_id: 9,
        genre_id: 3,
    },
    {
        title: `Demon Copperhead`,
        book_cover: '/images/demon-copperhead.jpg',
        book_date: '01/05/2021',
        author_id: 10,
        genre_id: 3,
    },
    {
        title: `Outlive`,
        book_cover: '/images/outlive.jpg',
        book_date: '01/05/2021',
        author_id: 11,
        genre_id: 3,
    },
    {
        title: `The Housemaid`,
        book_cover: '/images/housemaid.jpg',
        book_date: '01/05/2021',
        author_id: 12,
        genre_id: 3,
    },
    {
        title: `Lovely Girls`,
        book_cover: '/images/lovely-girls.jpg',
        book_date: '01/05/2021',
        author_id: 13,
        genre_id: 3,
    },
    {
        title: `The Subtle Art of Not Giving a F*ck`,
        book_cover: '/images/subtle-art.jpg',
        book_date: '01/05/2021',
        author_id: 14,
        genre_id: 3,
    },
    {
        title: `Harry Potter and the Chamber of Secrets, Book 2`,
        book_cover: '/images/harry-potter-2.jpg',
        book_date: '01/05/2021',
        author_id: 15,
        genre_id: 3,
    },
    {
        title: `Light Bringer`,
        book_cover: '/images/light-bringer.jpg',
        book_date: '01/05/2021',
        author_id: 16,
        genre_id: 3,
    },
    {
        title: `A Court of Thorns and Roses`,
        book_cover: '/images/court-of-roses.jpg',
        book_date: '01/05/2021',
        author_id: 17,
        genre_id: 3,
    },
    {
        title: `Greenlights`,
        book_cover: '/images/greenlights.jpg',
        book_date: '01/05/2021',
        author_id: 18,
        genre_id: 3,
    },
    {
        title: `Verity`,
        book_cover: '/images/verity.jpg',
        book_date: '01/05/2021',
        author_id: 19,
        genre_id: 3,
    },
    {
        title: `I'm Glad My Mom Died`,
        book_cover: '/images/im-glad-your-mom-died.jpg',
        book_date: '01/05/2021',
        author_id: 20,
        genre_id: 3,
    },
    {
        title: `Can't Hurt Me`,
        book_cover: '/images/cant-hurt-me.jpg',
        book_date: '01/05/2021',
        author_id: 4,
        genre_id: 3,
    },
    {
        title: `Atomic Habits`,
        book_cover: '/images/atomic-habits.jpg',
        book_date: '01/05/2021',
        author_id: 5,
        genre_id: 3,
    },
    {
        title: `American Prometheus`,
        book_cover: '/images/american-prometheus.jpg',
        book_date: '01/05/2021',
        author_id: 6,
        genre_id: 3,
    },
    {
        title: `Fourth Wing`,
        book_cover: '/images/fourth-wing.jpg',
        book_date: '01/05/2021',
        author_id: 7,
        genre_id: 3,
    },
    {
        title: `Lessons in Chemistry`,
        book_cover: '/images/lesson-chemestry.jpg',
        book_date: '01/05/2021',
        author_id: 8,
        genre_id: 3,
    },
    {
        title: `The Covenant of Water`,
        book_cover: '/images/covenant-water.jpg',
        book_date: '01/05/2021',
        author_id: 9,
        genre_id: 3,
    },
    {
        title: `Demon Copperhead`,
        book_cover: '/images/demon-copperhead.jpg',
        book_date: '01/05/2021',
        author_id: 10,
        genre_id: 3,
    },
    {
        title: `Outlive`,
        book_cover: '/images/outlive.jpg',
        book_date: '01/05/2021',
        author_id: 11,
        genre_id: 3,
    },
    {
        title: `The Housemaid`,
        book_cover: '/images/housemaid.jpg',
        book_date: '01/05/2021',
        author_id: 12,
        genre_id: 3,
    },
    {
        title: `Lovely Girls`,
        book_cover: '/images/lovely-girls.jpg',
        book_date: '01/05/2021',
        author_id: 13,
        genre_id: 3,
    },
    {
        title: `The Subtle Art of Not Giving a F*ck`,
        book_cover: '/images/subtle-art.jpg',
        book_date: '01/05/2021',
        author_id: 14,
        genre_id: 3,
    },
    {
        title: `Harry Potter and the Chamber of Secrets, Book 2`,
        book_cover: '/images/harry-potter-2.jpg',
        book_date: '01/05/2021',
        author_id: 15,
        genre_id: 3,
    },
    {
        title: `Light Bringer`,
        book_cover: '/images/light-bringer.jpg',
        book_date: '01/05/2021',
        author_id: 16,
        genre_id: 3,
    },
    {
        title: `A Court of Thorns and Roses`,
        book_cover: '/images/court-of-roses.jpg',
        book_date: '01/05/2021',
        author_id: 17,
        genre_id: 3,
    },
    {
        title: `Greenlights`,
        book_cover: '/images/greenlights.jpg',
        book_date: '01/05/2021',
        author_id: 18,
        genre_id: 3,
    },
    {
        title: `Verity`,
        book_cover: '/images/verity.jpg',
        book_date: '01/05/2021',
        author_id: 19,
        genre_id: 3,
    },
    {
        title: `I'm Glad My Mom Died`,
        book_cover: '/images/im-glad-your-mom-died.jpg',
        book_date: '01/05/2021',
        author_id: 20,
        genre_id: 3,
    },

   


];

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;

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
        pages:'audioBook: listening length: 13h23m',
        Language:'English',
        about:' From the author of Steve Jobs and other bestselling biographies, this is the astonishingly intimate story of the most fascinating and controversial innovator of our era',
        amazon_link: 'https://www.amazon.com/dp/B0BX4S57GM?plink=1nLKR4ANRlBpB3oD&ref_=adblp13nvvxx_0_4_ti',
    },
    {
        title: `It's a Small World`,
        book_cover: '/images/small-world.jpg',
        book_date: '01/05/2021',
        author_id: 3,
        genre_id: 3,
        pages:'24 pages',
        Language:'English',
        about:'This Little Golden Book takes readers on a journey into the iconic Disney Parks its a small world attraction-which is celebrating its 55th year in 2021!',
        amazon_link:'https://www.amazon.com/Small-Disney-Classic-Little-Golden/dp/073644131X/ref=sr_1_2?crid=1ZWPZLMNJPH92&keywords=It%27s+a+Small+World&qid=1691090955&sprefix=it%27s+a+small+world%2Caps%2C181&sr=8-2'
    },
    {
        title: `Can't Hurt Me`,
        book_cover: '/images/cant-hurt-me.jpg',
        book_date: '11/28/2018',
        author_id: 4,
        genre_id: 9,
        pages:'AudioBook: listening length: 13h 37m',
        Language:'English',
        about:'In Cant Hurt Me, he shares his astonishing life story and reveals that most of us tap into only 40 percent of our capabilities. Goggins calls this The 40% Rule', 
        amazon_link:'https://www.amazon.com/Cant-Hurt-Me-David-Goggins-audiobook/dp/B07KKP62FW/ref=sr_1_1?crid=1RHQVBNFWTCP9&keywords=title%3A+%60Can%27t+Hurt+Me%60%2C&qid=1691091070&sprefix=title+can%27t+hurt+me+%2C%2Caps%2C180&sr=8-1'
    },
    {
        title: `Atomic Habits`,
        book_cover: '/images/atomic-habits.jpg',
        book_date: '10/16/2018',
        author_id: 5,
        genre_id: 9,
        pages:'AudioBook: listening length: 5h 35m',
        Language:'English',
        about:'The number one New York Times best seller. Over one million copies sold!',
        amazon_link:'https://www.amazon.com/Atomic-Habits-James-Clear-audiobook/dp/B07RFSSYBH/ref=sr_1_1?crid=330B99ANTRC15&keywords=Atomic+Habits&qid=1691109098&sprefix=atomic+habits%2Caps%2C119&sr=8-1'
    },
    {
        title: `American Prometheus`,
        book_cover: '/images/american-prometheus.jpg',
        book_date: '03/28/2007',
        author_id: 6,
        genre_id: 9,
        pages:'AudioBook: listening length: 26h 30m',
        Language:'English',
        about:'PULITZER PRIZE WINNER The definitive biography of J. Robert Oppenheimer, one of the iconic figures of the twentieth century',
        amazon_link:'https://www.amazon.com/American-Prometheus-audiobook/dp/B000OZ0J0W/ref=sr_1_1?crid=2X08FX1ELDIDK&keywords=American+Prometheus&qid=1691113951&s=audible&sprefix=american+prometheus%2Caudible%2C177&sr=1-1'
    },
    {
        title: `Fourth Wing`,
        book_cover: '/images/fourth-wing.jpg',
        book_date: '05/02/2023',
        author_id: 7,
        genre_id: 9,
        pages:'AudioBook: listening length: 20h 43m',
        Language:'English',
        about:'Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros Empyrean series will delight fans of romantic, adventure-filled fantasy',
        amazon_link:'https://www.amazon.com/Fourth-Wing-Empyrean-Book-1/dp/B0BVDJ293G/ref=sr_1_1?crid=6T6NYLX65PVW&keywords=Fourth+Wing&qid=1691115234&s=audible&sprefix=fourth+wing%2Caudible%2C231&sr=1-1'
    },
    {
        title: `Lessons in Chemistry`,
        book_cover: '/images/lesson-chemestry.jpg',
        book_date: '04/05/2022',
        author_id: 8,
        genre_id: 9,
        pages:'AudioBook: listening length: 11h 55m',
        Language:'English',
        about: '#1 NEW YORK TIMES BESTSELLER GMA BOOK CLUB PICK Meet Elizabeth Zot',
        amazon_link:'https://www.amazon.com/Lessons-in-Chemistry-A-Novel/dp/B09BBK79VB/ref=sr_1_1?crid=1BX7MI7TG5QBP&keywords=Lessons+in+Chemistry&qid=1691115470&s=audible&sprefix=lessons+in+chemistry%2Caudible%2C107&sr=1-1'
    },
    {
        title: `The Covenant of Water`,
        book_cover: '/images/covenant-water.jpg',
        book_date: '05/02/2023',
        author_id: 9,
        genre_id: 9,
        pages:'AudioBook: listening length: 11h 55m',
        Language:'English',
        about:'She is twelve years old, and she will be married in the morning. Mother and daughter lie on the mat, their wet cheeks glued together.np',
        amazon_link:'https://www.amazon.com/Audible-The-Covenant-of-Water/dp/B0BVDNPQ1V/ref=sr_1_1?crid=YAWASDRLEXCT&keywords=The+Covenant+of+Water&qid=1691115615&s=audible&sprefix=the+covenant+of+water%2Caudible%2C132&sr=1-1'
    },
    {
        title: `Demon Copperhead`,
        book_cover: '/images/demon-copperhead.jpg',
        book_date: '01/05/2021',
        author_id: 10,
        genre_id: 3,
        pages:'AudioBook: listening length: 21h 03m',
        Language:'English',
        about:'A NEW YORK TIMES "TEN BEST BOOKS OF 2022"',
        amazon_link:'https://www.amazon.com/Audible-Demon-Copperhead-A-Novel/dp/B09QH6C42C/ref=sr_1_1?crid=25BLVTQCIC6LQ&keywords=Demon+Copperhead%60&qid=1691115733&s=audible&sprefix=demon+copperhead+%2Caudible%2C134&sr=1-1'
    },
    {
        title: `Outlive`,
        book_cover: '/images/outlive.jpg',
        book_date: '03/28/2023',
        author_id: 11,
        genre_id: 9,
        pages:'AudioBook: listening length: 17h 07m',
        Language:'English',
        about:'One of the most important books youll ever read.”—Steven D. Levitt, New York Times bestselling author of Freakonomics',
        amazon_link:'https://www.amazon.com/Audible-Outlive-Science-Art-Longevity/dp/B0B64WL9PK/ref=sr_1_1?crid=3VDAQYA5986L4&keywords=Outlive&qid=1691115839&s=audible&sprefix=outlive%2Caudible%2C107&sr=1-1'
    },
    {
        title: `The Housemaid`,
        book_cover: '/images/housemaid.jpg',
        book_date: '01/05/2021',
        author_id: 12,
        genre_id: 3,
        pages:'AudioBook: listening length: 9h 46m',
        Language:'English',
        about:'“Welcome to the family,” Nina Winchester says as I shake her elegant, manicured hand. I smile politely, gazing around the marble hallway.',
        amazon_link:'https://www.amazon.com/Audible-The-Housemaid/dp/B09XRF2SWN/ref=sr_1_1?crid=3JDV85191TOLC&keywords=The+Housemaid&qid=1691116014&s=audible&sprefix=the+housemaid%2Caudible%2C118&sr=1-1'
    },
    {
        title: `Lovely Girls`,
        book_cover: '/images/lovely-girls.jpg',
        book_date: '03/01/2023',
        author_id: 13,
        genre_id: 9,
        pages:'AudioBook: listening length: 8h 35m',
        Language:'English',
        about:'In this chilling story from USA Today bestselling author Margot Hunt, a mother and daughter try to start over in an idyllic town only to get caught up in cliques, mind games…and murder',
        amazon_link:'https://www.amazon.com/Audible-Lovely-Girls-A-Thriller/dp/B0B5PT8XSP/ref=sr_1_1?crid=1BFCEJ5ZQLZ1N&keywords=Lovely+Girls&qid=1691172147&s=audible&sprefix=lovely+girls%2Caudible%2C239&sr=1-1'
    },
    {
        title: `The Subtle Art of Not Giving a F*ck`,
        book_cover: '/images/subtle-art.jpg',
        book_date: '01/05/2021',
        author_id: 14,
        genre_id: 9,
        pages:'AudioBook: listening length: 5h 17m',
        Language:'English',
        about:'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people. ',
        amazon_link:'https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/B01I29Y344/ref=sr_1_1?crid=2G695GT5QMINJ&keywords=The+Subtle+Art+of+Not+Giving+a+F*ck&qid=1691172269&s=audible&sprefix=lovely+girls%2Caudible%2C263&sr=1-1'
    },
    {
        title: `Harry Potter and the Chamber of Secrets, Book 2`,
        book_cover: '/images/harry-potter-2.jpg',
        book_date: '01/05/2021',
        author_id: 15,
        genre_id: 9,
        pages:'AudioBook: listening length:09h 02m ',
        Language:'English',
        about:'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year',
        amazon_link:'https://www.amazon.com/Harry-Potter-Chamber-Secrets-Book'
    },
    {
        title: `Light Bringer`,
        book_cover: '/images/light-bringer.jpg',
        book_date: '07/25/2023',
        author_id: 16,
        genre_id: 9,
        pages:'AudioBook: listening length:30h 08m ',
        Language:'English',
        about:'Darrow returns as Pierce Browns New York Times bestselling Red Rising series continues in the thrilling sequel to Dark Age.',
        amazon_link:'https://www.amazon.com/Light-Bringer-Red-Rising-Book/dp/B0C28XJRBP/ref=sr_1_1?crid=2T0MSGB0QLV4G&keywords=Light+Bringer&qid=1691172516&s=audible&sprefix=light+bringer%2Caudible%2C293&sr=1-1'
    },
    {
        title: `A Court of Thorns and Roses`,
        book_cover: '/images/court-of-roses.jpg',
        book_date: '05/05/2025',
        author_id: 17,
        genre_id: 9,
        pages:'AudioBook: listening length:16h 07m ',
        Language:'English',
        about:'When 19-year-old huntress Feyre kills a wolf in the woods, a beast-like creature arrives to demand retribution for it. Dragged to a treacherous magical land she only knows about from legends,',
        amazon_link:'https://www.amazon.com/A-Court-of-Thorns-and-Roses-audiobook/dp/B00WXS68T4/ref=sr_1_1?crid=T08TPC2L2S5E&keywords=A+Court+of+Thorns+and+Roses&qid=1691172764&s=audible&sprefix=a+court+of+thorns+and+roses%2Caudible%2C207&sr=1-1'
    },
    {
        title: `Greenlights`,
        book_cover: '/images/greenlights.jpg',
        book_date: '10/20/2020',
        author_id: 18,
        genre_id: 9,
        pages:'AudioBook: listening length:6h 42m ',
        Language:'English',
        about:'Number-one New York Times Best Seller Discover the life-changing memoir that has inspired millions of readers through the Academy Award-winning actor’s unflinching honesty',
        amazon_link:'https://www.amazon.com/Greenlights/dp/B08HLW2JXD/ref=sr_1_1?crid=31AMHAF2SQZJJ&keywords=Greenlights&qid=1691173128&s=audible&sprefix=greenlights%2Caudible%2C175&sr=1-1'
    },
    {
        title: `Verity`,
        book_cover: '/images/verity.jpg',
        book_date: '01/05/2021',
        author_id: 19,
        genre_id: 3,
        pages:'AudioBook: listening length:8h 10m ',
        Language:'English',
        about:'Switch between reading the Kindle book & listening to the Audible audiobook with Whispersync for Voice.',
        amazon_link:'https://www.amazon.com/Verity-Colleen-Hoover-audiobook/dp/B07Q4XWX8C/ref=sr_1_1?crid=5N4ZM6KX2K5W&keywords=Verity&qid=1691173266&s=audible&sprefix=verity%2Caudible%2C286&sr=1-1'
    },
    {
        title: `I'm Glad My Mom Died`,
        book_cover: '/images/im-glad-your-mom-died.jpg',
        book_date: '08/09/2022',
        author_id: 20,
        genre_id: 9,
        pages:'AudioBook: listening length:8h 10m ',
        Language:'English',
        about:'A heartbreaking and hilarious memoir by iCarly and Sam & Cat star Jennette McCurdy about her struggles as a former child actor',
        amazon_link:'https://www.amazon.com/Im-Glad-My-Mom-Died/dp/B09VHWC5YK/ref=sr_1_1?crid=3LIQ5U7TX1LTH&keywords=I%27m+Glad+My+Mom+Died&qid=1691173367&s=audible&sprefix=i%27m+glad+my+mom+died%2Caudible%2C217&sr=1-1'
    },
    {
        title: `You'd Be Home Now`,
        book_cover: '/images/home-now.jpg',
        book_date: '09/28/2021',
        author_id: 4,
        genre_id: 9,
        pages:'AudioBook: listening length:12h 11m ',
        Language:'English',
        about:'NEW YORK TIMES BESTSELLER From the critically acclaimed author of Girl in Pieces comes a stunning novel that Vanity Fair',
        amazon_link:'https://www.amazon.com/Youd-Be-Home-Now/dp/B08WF8T9N7/ref=sr_1_3?crid=2UABGSG25FHS6&keywords=books+best+sellers&qid=1691173556&s=audible&sprefix=book%2Caudible%2C268&sr=1-3'
    },
    {
        title: `The Summer House`,
        book_cover: '/images/summer-house.jpg',
        book_date: '06/08/2020',
        author_id: 34,
        genre_id: 9,
        pages:'AudioBook: listening length:10h 19m ',
        Language:'English',
        about:'When seven murder victims are found in a small town, the homicide investigation shakes a small-town sheriff to her core in James Pattersons tense thriller.',
        amazon_link:'https://www.amazon.com/The-Summer-House/dp/B0876BRFGX/ref=sr_1_5?crid=2UABGSG25FHS6&keywords=books+best+sellers&qid=1691173556&s=audible&sprefix=book%2Caudible%2C268&sr=1-5'
    },
    {
        title: `The Five-Star Weekend`,
        book_cover: '/images/Five-star.jpg',
        book_date: '06/13/2023',
        author_id: 35,
        genre_id: 9,
        pages:'AudioBook: listening length:12h 45m ',
        Language:'English',
        about:'From the #1 New York Times bestselling author of The Hotel Nantucket: After tragedy strikes',
        amazon_link:'https://www.amazon.com/Audible-The-Five-Star-Weekend/dp/B0BHF4CXJP/ref=sr_1_12?crid=2UABGSG25FHS6&keywords=books+best+sellers&qid=1691173556&s=audible&sprefix=book%2Caudible%2C268&sr=1-12'
    },
    {
        title: `Before We Were Yours: A Novel`,
        book_cover: '/images/Novel.jpg',
        book_date: '06/06/2017',
        author_id: 36,
        genre_id: 9,
        pages:'AudioBook: listening length:12h 45m ',
        Language:'English',
        about:'number 375 in Audible Books & Originals',
        amazon_link:'https://www.amazon.com/Before-We-Were-Yours-Lisa-Wingate-audiobook/dp/B06Y1MGNL9/ref=sr_1_1?crid=MVR6KOA69417&keywords=Before+We+Were+Yours%3A+A+Novel&qid=1691175072&s=audible&sprefix=before+we+were+yours+a+novel%2Caudible%2C181&sr=1-1'
    },
    {
        title: `The Book Thief`,
        book_cover: '/images/lesson-chemestry.jpg',
        book_date: '09/14/2006',
        author_id: 37,
        genre_id: 9,
        pages:'AudioBook: listening length:13h 56m ',
        Language:'English',
        about:'noun',
        amazon_link:'https://www.amazon.com/dp/B000J20TZA?plink=7xJ9yqedFMnOrFvv&ref_=adblp13npsbx_1_4_im'
    },
    {
        title: `Book Lover`,
        book_cover: '/images/book-love.jpg',
        book_date: '01/05/2021',
        author_id: 38,
        genre_id: 9,
        pages:'AudioBook: listening length:11h 23m ',
        Language:'English',
        about:'An insightful, delightful, instant #1 New York Times bestseller from the author of Beach Read and People We Meet on Vacation.',
        amazon_link:'https://www.amazon.com/Audible-Book-Lovers/dp/B09BWT8PQJ/ref=sr_1_2?crid=28YH92VXB348D&keywords=book&qid=1691175464&s=audible&sprefix=book%2Caudible%2C152&sr=1-2'
    },
    {
        title: `The Book of Lost Names`,
        book_cover: '/images/lost-names.jpg',
        book_date: '01/05/2021',
        author_id: 39,
        genre_id: 9,
        pages:'AudioBook: listening length:10h 50m ',
        Language:'English',
        about:'A fascinating, heartrending page-turner that, like the real-life forgers who inspired the novel, should never be forgotten',
        amazon_link:'https://www.amazon.com/The-Book-of-Lost-Names/dp/B07Z9MM4BC/ref=sr_1_39?crid=28YH92VXB348D&keywords=book&qid=1691175647&s=audible&sprefix=book%2Caudible%2C152&sr=1-39'
    },
    {
        title: `The Four Agreements`,
        book_cover: '/images/the-four.jpg',
        book_date: '01/27/2005',
        author_id: 40,
        genre_id: 9,
        pages:'AudioBook: listening length:2h 31m ',
        Language:'English',
        about:'In The Four Agreements, don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom',
        amazon_link:'https://www.amazon.com/The-Four-Agreements-don-Miguel-Ruiz-audio/dp/B0007OB40E/ref=sr_1_47?crid=28YH92VXB348D&keywords=book&qid=1691175814&s=audible&sprefix=book%2Caudible%2C152&sr=1-47'
    },
    {
        title: `A Not So Meet Cute`,
        book_cover: '/images/not-so-cute.jpg',
        book_date: '11/02/2021',
        author_id: 41,
        genre_id: 9,
        pages:'AudioBook: listening length:11h 53m ',
        Language:'English',
        about:'From USA Today best-selling author of The Highland Fling comes a brand new romantic comedy about a desperate billionaire seeking to find a fiancée',
        amazon_link:'https://www.amazon.com/A-Not-So-Meet-Cute/dp/B09J97T32C/ref=sr_1_50_sspa?crid=28YH92VXB348D&keywords=book&qid=1691175953&s=audible&sprefix=book%2Caudible%2C152&sr=1-50-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA&psc=1'
    },
    {
        title: `Wild: The Wild, Book 1`,
        book_cover: '/images/the-wild.jpg',
        book_date: '06/20/2023',
        author_id: 42,
        genre_id: 9,
        pages:'AudioBook: listening length:11h 53m ',
        Language:'English',
        about:'It’s what we’ve always wanted—what we have always dreamed of—and nothing will stand in the way of achieving success. Except maybe me.',
        amazon_link:'https://www.amazon.com/Wild-The-Book-1/dp/B0C5S7H3S2/ref=sr_1_2_sspa?crid=2R05IM70F3I98&keywords=Wild%3A+The+Wild%2C+Book+1&qid=1691176259&s=audible&sprefix=wild+the+wild%2C+book+1%2Caudible%2C220&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
        title: `The Terminal List: A Thriller`,
        book_cover: '/images/thriller.jpg',
        book_date: '03/06/2018',
        author_id: 43,
        genre_id: 9,
        pages:'AudioBook: listening length:12h 03m ',
        Language:'English',
        about:'“Take my word for it, James Reece is one rowdy motherf***er. Get ready!”—Chris Pratt, all around great guy and star of The Terminal List, coming to Amazon Prime ',
        amazon_link:'https://www.amazon.com/The-Terminal-List-Jack-Carr-audiobook/dp/B078SFLTFP/ref=sr_1_5?crid=23DZONIKBSBR&keywords=books&qid=1691176452&s=audible&sprefix=book%2Caudible%2C181&sr=1-5'
    },
    {
        title: `The Last Wish`,
        book_cover: '/images/last-wish.jpg',
        book_date: '05/05/2015',
        author_id: 44,
        genre_id: 9,
        pages:'AudioBook: listening length:10h 17m ',
        Language:'English',
        about:'Geralt of Rivia is a witcher. A cunning sorcerer. A merciless assassin.And a cold-blooded killer',
        amazon_link:'https://www.amazon.com/The-Last-Wish-Andrzej-Sapkowski-audiobook/dp/B00WZKNDJS/ref=sr_1_46?crid=23DZONIKBSBR&keywords=books&qid=1691176621&s=audible&sprefix=book%2Caudible%2C181&sr=1-46'
    },
    {
        title: `Girl in Pieces`,
        book_cover: '/images/girl-in-piece.jpg',
        book_date: '08/30/2016',
        author_id: 45,
        genre_id: 9,
        pages:'AudioBook: listening length:10h 17m ',
        Language:'English',
        about:'For fans of Girl, Interrupted, Thirteen Reasons Why, and All the Bright Places comes a novel Nicola Yoon, author of Everything, Everything, calls "a haunting, beautiful, and necessary book".',
        amazon_link:'https://www.amazon.com/Girl-in-Pieces-Kathleen-Glasgow-audiobook/dp/B01JGRI9SW/ref=sr_1_16?crid=23DZONIKBSBR&keywords=books&qid=1691176865&rnid=18145289011&s=audible&sprefix=book%2Caudible%2C181&sr=1-16'
    },
    {
        title: `Big Ideas Simply Explained`,
        book_cover: '/images/big-ideas.jpg',
        book_date: '06/29/2021',
        author_id: 46,
        genre_id: 7,
        pages:'AudioBook: listening length:10h 17m ',
        Language:'English',
        about:'An accessible guide to more than 95 of the most important discoveries and theories in the history of biology. ',
        amazon_link:'https://www.amazon.com/Biology-Book-Ideas-Simply-Explained/dp/B08ZRDSPT3/ref=sr_1_1?crid=3SUOLJA3PQFNW&keywords=biology+book&qid=1691177111&s=audible&sprefix=biogloy+book%2Caudible%2C154&sr=1-1'
    },
    {
        title: `Marple: Twelve New Mysteries`,
        book_cover: '/images/new-mysteries.jpg',
        book_date: '09/13/2022',
        author_id: 47,
        genre_id: 5,
        pages:'AudioBook: listening length:11h 28m ',
        Language:'English',
        about:'A brand-new collection of short stories featuring the Queen of Mystery’s legendary detective Jane Marple, penned by 12 remarkable best-selling and acclaimed authors',
        amazon_link:'https://www.amazon.com/Audible-Marple-Twelve-New-Mysteries/dp/B09PGPG7H2/ref=sr_1_3?crid=269Q2P2L9M4VJ&keywords=mystery+book&qid=1691177407&s=audible&sprefix=mysterybook%2Caudible%2C165&sr=1-3'
    },
    {
        title: `The Kardashians: An American Drama`,
        book_cover: '/images/american-drama.jpg',
        book_date: '01/05/2021',
        author_id: 48,
        genre_id: 6,
        pages:'AudioBook: listening length:09h 52m ',
        Language:'English',
        about:'Secrets and scandals of the Kardashians, so closely held that not even hardcore fans have heard about them, ',
        amazon_link:'https://www.amazon.com/The-Kardashians-Jerry-Oppenheimer-audiobook/dp/B074Q2JH7V/ref=sr_1_12?crid=1UJCZS6WSYX3J&keywords=Drama+book&qid=1691177599&s=audible&sprefix=mystery+book%2Caudible%2C304&sr=1-12'
    },
    {
        title: `Treasury of Classic Children's Stories `,
        book_cover: '/images/childrens-stories.jpg',
        book_date: '09/12/2017',
        author_id: 49,
        genre_id: 3,
        pages:'AudioBook: listening length:09h 52m ',
        Language:'English',
        about:'Bedtime, playtime, and long voyages in the car will never be the same again as families gather to listen to classic tales brought to life by award-winning performers',
        amazon_link:'https://www.amazon.com/Treasury-of-Classic-Childrens-Stories/dp/B075J8DSZG/ref=sr_1_3?crid=2UQTU67G02G3B&keywords=Children+Book+book&qid=1691177817&s=audible&sprefix=children+book+book%2Caudible%2C270&sr=1-3'
    },

   


];

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;

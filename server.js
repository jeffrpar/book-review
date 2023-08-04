// Imports the fundamental packages.
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./controllers');

// Imports the helper fuctions / handlebars packages.
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');


// Imports the session package to sequelize with the database.
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

// To connect session to sequelize.
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
      }),
};

app.use(session(sess));

// Implements the helpers util as middlewere.
const hbs = exphbs.create({ helpers });

// Set default template engine for the program.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware.
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// Initialize the server.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
})

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
///////test for helloworld on heroku////////////////////
// app.get('/helloworld', (req, res) => {
//   res.send('Helloworld');
// });
app.get('/', (req, res) => {
  res.render('homepage', {books: []}); // Or whatever your data source is
});
//////////////end test///////////////////////////////

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

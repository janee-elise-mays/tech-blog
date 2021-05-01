const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// set handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/post-routes'));

app.listen(PORT, () => {
    console.log('server listening on: http://localhost:' + PORT);
});
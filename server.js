const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');
const helpers = require('./helpers/helpers.js');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({ extname: '.hbs', helpers });

// We use a select helper to set the selected option from the database for certain
// drop down menus in our application
hbs.handlebars.registerHelper('select', function (selected, options) {
    return options
        .fn(this)
        .replace(
            new RegExp(' value="' + selected + '"'),
            '$& selected="selected"'
        );
});

const app = express();
const PORT = process.env.PORT || 3001;

// Session configuration
const sess = {
    secret: 'S7NAGufWAThLXMqg',
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

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Middleware configuration
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Implement our custom routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(`Now listening on http://localhost:${PORT}`)
    );
});

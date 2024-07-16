const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');
const helpers = require('./helpers/helpers.js');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({ extname: '.hbs', helpers });

hbs.handlebars.registerHelper('select', function (value, options) {
    // Create a select element
    var select = document.createElement('select');

    // Populate it with the option HTML
    $(select).html(options.fn(this));

    //below statement doesn't work in IE9 so used the above one
    //select.innerHTML = options.fn(this);

    // Set the value
    select.value = value;

    // Find the selected node, if it exists, add the selected attribute to it
    if (select.children[select.selectedIndex]) {
        select.children[select.selectedIndex].setAttribute(
            'selected',
            'selected'
        );
    } else {
        //select first option if that exists
        if (select.children[0]) {
            select.children[0].setAttribute('selected', 'selected');
        }
    }
    return select.innerHTML;
});

const app = express();
const PORT = process.env.PORT || 3001;

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

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(`Now listening on http://localhost:${PORT}`)
    );
});

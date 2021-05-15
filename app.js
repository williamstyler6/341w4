const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const controllerError = require('./controllers/error');
const mongodbConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(controllerError.get404);

mongodbConnect(() => {
    app.listen(3000);
});
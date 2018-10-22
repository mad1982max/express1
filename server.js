const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/app.config');
const usersRoutes = require('./routes/users.routes');
const adminRoutes = require('./routes/admin.routes');
const productsRoutes = require('./routes/products.routes');
const log = require('./services/log.service');
const MyErrors = require('./libs/error');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(log.logger);

app.use('/system/users', usersRoutes);
app.use('/admin', adminRoutes);
app.use('/users', productsRoutes);

app.use(MyErrors.error404);
app.use(MyErrors.errorLogger);
app.use(MyErrors.errorHandler);

app.listen(config.server.port, () => console.log(`...listening port ${config.server.port}`));
const express = require('express');
const app = express();
const config = require('./config/app.config');
const usersRoutes = require('./routes/users.routes');
const log = require('./services/log');
const bodyParser = require('body-parser');
const MyErrors = require('./libs/error');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(log.logger);
app.use('/users', usersRoutes);

app.use(MyErrors.error404);
app.use(MyErrors.errorLogger);
app.use(MyErrors.errorHandler);


app.listen(config.server.port, () => console.log(`...listening port ${config.server.port}`));
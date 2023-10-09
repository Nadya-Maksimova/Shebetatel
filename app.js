const express = require('express');
const morgan = require('morgan');
require('@babel/register');

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes');
const ssr = require('./middleware/ssr');
const session = require('./middleware/session');

const app = express();

const PORT = 3000;
const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};
app.use(cookieParser());
app.use(expressSession(sessionConfig));
app.use(session);

app.use(ssr);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRouter);
app.listen(PORT, console.log('It works'));

const router = require('express').Router();
const main = require('./main');

router.use('/', main);

const registration = require('./registration');

router.use('/register', registration);

const login = require('./login');

router.use('/login', login);

const logout = require('./logout');

router.use('/logout', logout);

const profile = require('./profile');

router.use('/profile', profile);

const updatePost = require('./updatePost');

router.use('/update', updatePost);

module.exports = router;

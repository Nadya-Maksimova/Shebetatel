const React = require('react');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Login = require('../views/Login');

router.get('/', (req, res) => {
  const { user } = res.locals;
  if (!user) {
    res.renderComponent(Login);
  } else {
    res.redirect('/');
  }
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const logUser = await User.findOne({ where: { email } });
    if (logUser) {
      const validPassword = await bcrypt.compare(password, logUser.password);
      if (validPassword) {
        req.session.user_id = logUser.id;
        res.json({ status: 'success' });
      }
    }
    return res.status(404).json({ status: 'error', message: 'Ваш пароль или email неверный!' });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;

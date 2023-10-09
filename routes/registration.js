const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Registration = require('../views/Registration');

router.get('/', (req, res) => {
  const { user } = res.locals;
  if (!user) {
    res.renderComponent(Registration);
  } else {
    res.redirect('/');
  }
});

router.post('/', async (req, res) => {
  const {
    name, email, password, confirm,
  } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(401).json({ status: 'error', message: 'Этот пользователь уже зарегистрирован' });
    }
    if (password.length < 8) {
      return res.status(401).json({ status: 'error', message: 'Пароль должен содержать 8+ символов' });
    }
    if (password === confirm) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword });
      req.session.user_id = newUser.id;
      res.status(200).json({ message: 'User created' });
    } else {
      res.status(401).json({ status: 'error', message: 'Пароли должны совпадать' });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

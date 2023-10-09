const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Session delete error' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});
module.exports = router;
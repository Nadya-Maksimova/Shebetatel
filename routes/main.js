const router = require('express').Router();
const Main = require('../views/Main');
const { Schebet } = require('../db/models');
const { Like } = require('../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const cards = await Schebet.findAll();
  const likes = await Like.findAll();
  res.renderComponent(Main, { user, cards, likes });
});
router.put('/:id', async (req, res) => {
  try {
    let like;
    const { id } = req.params;
    const { user } = res.locals;
    like = await Like.findOne({ where: { schebetId: id, userId: user.id } });
    if (!like) {
      like = await Like.create({ schebetId: id, userId: user.id });
      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const { text, image } = req.body;
    const newPost = await Schebet.create({
      userId: user.id,
      text,
      image,
      userName: user.name,
    });
    res.json({ newPost });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

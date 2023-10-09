const router = require('express').Router();
const Profile = require('../views/Profile');
const { Schebet } = require('../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const cards = await Schebet.findAll({
    where: {
      userId: user.id,
    },
  });
  res.renderComponent(Profile, { cards, user });
});

router.post('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const { text, image } = req.body;
    const newPostInProfile = await Schebet.create({
      userId: user.id,
      text,
      image,
      userName: user.name,
    });
    res.json({ newPostInProfile });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = res.locals;
    const postCard = await Schebet.findOne({ where: { id } });

    if (!user) {
      return res.sendStatus(404);
    }
    if (user.id !== Number(postCard.userId)) {
      return res.sendStatus(404);
    }
    const data = await Schebet.destroy({ where: { id } });
    res.json(data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

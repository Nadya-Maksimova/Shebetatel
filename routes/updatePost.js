const router = require('express').Router();
const UpdatePost = require('../views/UpdatePost');
const { Schebet } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cards = await Schebet.findOne({ where: { id } });
  res.renderComponent(UpdatePost, { cards });
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { image, text } = req.body;
    const { user } = res.locals;
    const card = await Schebet.findOne({ where: { id } });
    if (!user) {
      return res.status(404);
    }
    if (user.id !== Number(card.userId)) {
      return res.status(404);
    }
    if (!image || !text) {
      return res.status(404).json({ message: 'Fill all!' });
    }
    await Schebet.update({ image, text }, { where: { id } });
    const changedCard = await Schebet.findOne({ where: { id } });
    res.json(changedCard);
  } catch (error) {
    console(error.message);
  }
});
module.exports = router;

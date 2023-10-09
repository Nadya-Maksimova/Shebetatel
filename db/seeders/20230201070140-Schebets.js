/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schebetData = [{
      image: 'https://static01.nyt.com/images/2022/07/05/science/30tb-panda/30tb-panda-mediumSquareAt3X.jpg',
      text: 'Do you know that pandas are the cutest animals in the world?',
      userName: 'Derek Morgan',
      userId: 1,
    },
    {
      image: 'https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg',
      text: 'Lions can be really scary',
      userName: 'Derek Morgan',
      userId: 1,
    },
    ];
    const schebet = schebetData.map((schebet) => ({
      ...schebet,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Schebets', schebet);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schebets', null, {});
  },
};

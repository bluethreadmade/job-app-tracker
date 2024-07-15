const sequelize = require('../config/connection');
const { User, Application } = require('../models');

const userSeedData = require('./userSeedData.json');
const applicationSeedData = require('./applicationSeedData.json');

const seedDatabase = async () => {
    // Initialize the sequelize datbase connection
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData);
    await Application.bulkCreate(applicationSeedData);

    process.exit(0);
};

seedDatabase();

const sequelize = require('../config/connection');
const { User, Application, Interview } = require('../models');

const userSeedData = require('./userSeedData.json');
const applicationSeedData = require('./applicationSeedData.json');
const interviewSeedData = require('./interviewSeedData.json');

const seedDatabase = async () => {
    // Initialize the sequelize datbase connection
    await sequelize.sync({ force: true });

    // These need to be done sequentially because of the relationship
    // between the models
    await User.bulkCreate(userSeedData, { individualHooks: true });
    await Application.bulkCreate(applicationSeedData);
    await Interview.bulkCreate(interviewSeedData);

    process.exit(0);
};

seedDatabase();

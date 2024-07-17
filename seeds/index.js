const sequelize = require('../config/connection');
const { faker, fakerEN_US } = require('@faker-js/faker');
const { APPLICATION_STATUS, WORK_SITE } = require('../models/Application.js');
const { User, Application, Interview } = require('../models');

const seedDatabase = async () => {
    // Initialize the sequelize datbase connection
    await sequelize.sync({ force: true });

    // Generate some users
    const users = [];
    for (let i = 0; i < 10; i++) {
        users.push({
            email: faker.internet.email().toLowerCase(),
            password: faker.internet.password(),
        });
    }

    // Add an admin user
    users.push({ email: 'admin@example.com', password: 'admin123' });

    // Store the users on the database
    await User.bulkCreate(users, { individualHooks: true });

    // Generate random applications
    const applications = [];
    for (let i = 0; i < 60; i++) {
        applications.push({
            company: faker.company.name(),
            position: faker.person.jobTitle(),
            link_to_posting: faker.internet.url(),
            status:
                Math.floor(
                    Math.random() * Object.keys(APPLICATION_STATUS).length
                ) + 1,
            location: `${fakerEN_US.location.city()}, ${fakerEN_US.location.state(
                { abbreviated: true }
            )}`,
            interest_level: Math.floor(Math.random() * 5) + 1,
            response_received_date: faker.date.soon(),
            application_submitted_date: faker.date.recent(),
            work_site:
                Math.floor(Math.random() * Object.keys(WORK_SITE).length) + 1,
            user_id: Math.floor(Math.random() * users.length) + 1,
        });
    }

    // Store the applications on the database
    await Application.bulkCreate(applications);

    const interviews = [];
    for (let i = 0; i < 10; i++) {
        interviews.push({
            date: faker.date.soon(),
            address: `${fakerEN_US.location.streetAddress()}, ${fakerEN_US.location.city()}, ${fakerEN_US.location.state(
                { abbreviated: true }
            )}`,
            videoLink: null,
            interviewer: faker.person.fullName(),
            application_id: Math.floor(Math.random() * applications.length) + 1,
        });
    }

    await Interview.bulkCreate(interviews);

    console.log(
        '---------- GENERATED DATA -----------\n',
        JSON.stringify({ users, applications, interviews }, null, 4)
    );
    process.exit(0);
};

seedDatabase();

// Import models
const User = require('./User');
const Interview = require('./Interview');
const { Application } = require('./Application');

// Define the relationship between the a user and an application
User.hasMany(Application);
Application.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Define the relationship between an application and an interview
Interview.belongsTo(Application, {
    foreignKey: 'application_id',
    onDelete: 'CASCADE',
});
Application.hasMany(Interview);

// Export modules
module.exports = { User, Application, Interview };

// Import models
const User = require('./User');
const Application = require('./Application');

// Define relationships

User.hasMany(Application);

Application.belongsTo(User);

// Export modules
module.exports = { User, Application };
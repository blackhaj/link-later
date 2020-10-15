const Sequelize = require('sequelize');
// const bcrypt = require('bcryptjs');

// Import models
const UserModel = require('./models/user');
const TagModel = require('./models/tag');
const LinkModel = require('./models/link');

// Instantiate the DB
const sequelize = new Sequelize({
  host: process.env.DB_URL,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAM,
});

const User = UserModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const Link = LinkModel(sequelize, Sequelize);

// sequelize.sync({force: true})
//   .then(() => {
//     console.log('DB up to date');
//   })
//   .catch((err) => {
//     console.log("Error occuring syncing DB")
//     console.log("Error message: ", err)
//   })

module.exports = {
  User,
  Tag,
  Link,
  sequelize,
};

/* 
id - unique id for the user
email - users email address
password - users password
 */
module.exports = (sequelize, type) => {
  return sequelize.define("user", {
    id: {
      primaryKey: true,
      type: type.UUID,
      defaultValue: type.UUIDV4,
      allowNull: false
    },
    email: {
      type: type.STRING,
      unique: true,
      isEmail: true,
      allowNull: false,
      notEmpty: true,
    },
    password: {
      type: type.STRING,
      len: [5, 50],
      allowNull: false,
      notEmpty: true,
    },
  });
};
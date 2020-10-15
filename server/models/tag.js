/* 
id - unique id for the tag
name - user assigned name of tag
user_id - foreign key for user (owner of tag)
 */
module.exports = (sequelize, type) => {
  return sequelize.define("user", {
    id: {
      primaryKey: true,
      type: type.UUID,
      defaultValue: type.UUIDV4,
      allowNull: false
    },
    name: {
      type: type.STRING,
      allowNull: false,
      notEmpty: true,
    },
    userId: {
      type: type.UUID,
      references: {
        model: "users", 
        key: "id",
      },
      allowNull: false,
    },
    password: {
      type: type.STRING,
      len: [5, 50],
      allowNull: false,
      notEmpty: true,
    },
  });
};
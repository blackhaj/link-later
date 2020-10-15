/* 
id - unique id for the link
user_id - foreign key for user (owner of link)
name - user assigned name of link
link - link string
 */
module.exports = (sequelize, type) => {
  return sequelize.define("account", {
    id: {
      primaryKey: true,
      type: type.UUID,
      defaultValue: type.UUIDV4,
      allowNull: false
    },
    userId: {
      type: type.UUID,
      references: {
        model: "users", 
        key: "id",
      },
      allowNull: false,
    },
    name: {
      type: type.STRING,
      allowNull: false,
      notEmpty: true,
    },
    link: {
      type: type.STRING,
      allowNull: false,
      notEmpty: true,
    },
  });
};
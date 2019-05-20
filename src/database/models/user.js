import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    isVerified: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [8, 72]
      },
    },
  }, {});
  User.associate = (/* models */) => {
    // associations can be defined here
  };

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, salt);
  });

  User.beforeUpdate((user) => {
    if (user.previous().password) {
      user.password = bcrypt.hashSync(user.password, salt);
    }
  });

  User.passwordMatch = (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword);
  return User;
};

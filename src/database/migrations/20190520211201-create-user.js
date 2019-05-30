module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      firstname: {
        allowNull: {
          args: false,
          msg: 'Please enter a firstname'
        },
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: {
          args: false,
          msg: 'Please enter a lastname'
        },
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        allowNull: {
          args: false,
          msg: 'Please enter a password'
        },
        type: Sequelize.STRING,
        validate: {
          len: [8, 72]
        },
      },
      role: {
        defaultValue: 'user',
        type: Sequelize.ENUM,
        values: ['user', 'admin']
      },
      isVerified: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, /* Sequelize */) => {
    return queryInterface.dropTable('Users');
  }
};

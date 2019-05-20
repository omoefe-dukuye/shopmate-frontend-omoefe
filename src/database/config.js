const { NODE_ENV: env, DATABASE_URL: url } = process.env;

module.exports = {
  url,
  dialect: 'postgres',
  logging: env !== 'production'
};

module.exports = {
  HOST: "us-cdbr-east-06.cleardb.net",
  USER: "b490d78c074b7c",
  PASSWORD: "27a2548e",
  DB: "heroku_8320ac2be966bd6",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
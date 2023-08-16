module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Rahul@07",
  DB: "test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port:3306,
};
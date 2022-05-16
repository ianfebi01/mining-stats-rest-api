import { Sequelize } from 'sequelize';

const db = new Sequelize('miningstats_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8889,
});

export default db;

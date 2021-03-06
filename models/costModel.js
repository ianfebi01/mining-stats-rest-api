import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const cost = db.define(
  'cost',
  {
    detail: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    date: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default cost;

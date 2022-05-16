import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const income = db.define(
  'incomes',
  {
    value: {
      type: DataTypes.DOUBLE,
    },
    fee: {
      type: DataTypes.DOUBLE,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true }
);

export default income;

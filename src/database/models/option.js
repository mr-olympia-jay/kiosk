// src/database/models/option.js

import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';

class Options extends Model {}

Options.init(
  {
    id: {
      allowNull: false, // NOT NULL
      autoIncrement: true, // AUTO_INCREMENT
      primaryKey: true, // PK
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true, // UNIQUE
    },
    extra_price: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    shot_price: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    hot: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Options',
  }
);

export default Options;

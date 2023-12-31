// src/database/index.js

import sequelize from './sequelize';

import Items from './models/item';
import Orders from './models/order';
import OrderItems from './models/orderItem';
import Options from './models/option';
import Users from './models/user';
import Managers from './models/manager';

import modelRelations from './relations/index';

Object.values(modelRelations).forEach((relationsFunction) => {
  relationsFunction();
});

export { sequelize, Items, Orders, OrderItems, Options, Users, Managers };

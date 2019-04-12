'use strict'

const Joi = require('joi');
const Jwt = require('jsonwebtoken');
const Item = require('../model/Item');
const Boom = require('boom');


module.exports = {
      method: 'GET',
      path: '/api/items',
      config: {
        auth: false,
      handler: ( req, res ) => {
        Item.find()
          // Deselect the password and version fields
          .sort({ date: -1 })
          .exec((err, items) => {
            if (err) {
              throw Boom.badRequest(err);
            }
            if (!items.length) {
              throw Boom.notFound('No items found!');
            }
            res(items);
          });
      },
      // auth: {
      //   strategy: 'jwt',
      //   scope: ['admin']
      // }
    }
  };

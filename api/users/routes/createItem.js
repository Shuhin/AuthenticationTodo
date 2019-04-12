'use strict'

const Joi = require('joi');
const Jwt = require('jsonwebtoken');
const Item = require('../model/Item');
const Boom = require('boom');
const createItemSchema = require('../schemas/createItem')

module.exports = {
      method: 'POST',
      path: '/api/items',
      config: {
        auth: false,
        validate: {
          payload: createItemSchema
      },
    handler: async (req, res) => {
      try {
          const newItem  = new Item( req.payload );
          const result = await newItem.save();
          res(result);
          } catch (err) {
        throw Boom.badRequest(err);
        }
      }
    }  
  };
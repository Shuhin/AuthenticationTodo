'use strict'

const Joi = require('joi');
const Jwt = require('jsonwebtoken');
const Item = require('../model/Item');
const Boom = require('boom');
const createItemSchema = require('../schemas/createItem')

module.exports = {
     method: 'DELETE',
     path: '/api/items/{_id}',
     config:{
       auth: false,
     handler: async (req, res) => {
       try{
       Item.deleteOne({"_id": req.params._id});
     } catch (err) {
            throw Boom.badRequest(err);
            return;
          }
          res( console.log("deleted"));
        }
      }
    };

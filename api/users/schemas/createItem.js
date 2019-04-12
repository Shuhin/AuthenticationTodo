'use strict';

const Joi = require('joi');

const createItemSchema = Joi.object({
   name: Joi.string()
});

module.exports = createItemSchema;

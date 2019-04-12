'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({

  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },


  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },

  password: {
    type: String,
    required: true
  },

  admin: {
    type: Boolean,
    required: true
  },

  register_date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('User', userModel);

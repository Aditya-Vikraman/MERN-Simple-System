const mongoose = require('mongoose');

const ramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'ram name must be provided']
  },
  space: {
    type: String,
    required: [true, 'ram space must be provided']
  },
  type: {
    type: String,
    required: [true, 'ram type must be provided']
  },
  info: {
    type: String,
    required: [true, 'ram info must be provided']
  },
  price: {
    type: Number,
    required: [true, 'ram price must be provided']
  },
  image: {
    type: String,
    required: [true, 'ram image must be provided']
  },
},{timestamps: true})

module.exports = mongoose.model('Ram', ramSchema)
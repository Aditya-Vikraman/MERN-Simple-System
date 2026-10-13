const mongoose = require('mongoose');

const psuSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: [true, 'psu manufacturer must be provided']
  },
  name: {
    type: String,
    required: [true, 'psu name must be provided']
  },
  wattage: {
    type: String,
    required: [true, 'psu wattage must be provided']
  },
  efficiency: {
    type: String,
    required: [true, 'psu efficiency must be provided']
  },
  modular: {
    type: String,
    required: [true, 'psu modular must be provided']
  },
  price: {
    type: Number,
    required: [true, 'psu price must be provided']
  },
  image: {
    type: String,
    required: [true, 'psu image must be provided']
  },
},{timestamps: true})

module.exports = mongoose.model('Psu', psuSchema)
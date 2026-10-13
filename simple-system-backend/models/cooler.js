const mongoose = require('mongoose');

const coolerSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: [true, 'cooler manufacturer must be provided']
  },
  name: {
    type: String,
    required: [true, 'cooler name must be provided']
  },
  info: {
    type: String,
    required: [true, 'cooler info must be provided']
  },
  tdp: {
    type: String,
    required: [true, 'cooler tdp must be provided']
  },
  price: {
    type: Number,
    required: [true, 'cooler price must be provided']
  },
  image: {
    type: String,
    required: [true, 'cooler image must be provided']
  },
},{timestamps: true})

module.exports = mongoose.model('Cooler', coolerSchema)
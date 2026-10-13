const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'laptop name must be provided']
  },
  cpu: {
    type: String,
    required: [true, 'laptop cpu must be provided']
  },
  ram: {
    type: String,
    required: [true, 'laptop ram must be provided']
  },
  gpu: {
    type: String,
    required: [true, 'laptop gpu must be provided']
  },
  storage: {
    type: String,
    required: [true, 'laptop storage must be provided']
  },
  display: {
    type: String,
    required: [true, 'laptop display must be provided']
  },
  image: {
    type: String,
    required: [true, 'laptop image must be provided']
  },
  price: {
    type: Number,
    required: [true, 'laptop price must be provided']
  },
},{timestamps: true})

module.exports = mongoose.model('Laptop', laptopSchema)
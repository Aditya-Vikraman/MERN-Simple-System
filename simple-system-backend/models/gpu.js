const mongoose = require('mongoose');

const gpuSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: [true, 'gpu manufacturer must be provided']
  },
  brand: {
    type: String,
    required: [true, 'gpu brand must be provided']
  },
  series: {
    type: String,
    required: [true, 'gpu series must be provided']
  },
  name: {
    type: String,
    required: [true, 'gpu name must be provided']
  },
  info: {
    type: String,
    required: [true, 'gpu info must be provided']
  },
  power: {
    type: String,
    required: [true, 'gpu power must be provided']
  },
  psu: {
    type: String,
    required: [true, 'gpu psu must be provided']
  },
  price: {
    type: Number,
    required: [true, 'gpu number must be provided']
  },
  image: {
    type: String,
    required: [true, 'gpu image must be provided']
  }
},{timestamps: true})

module.exports = mongoose.model('Gpu', gpuSchema)
const mongoose = require('mongoose');

const processorSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'processor brand must be provided']
  },
  name: {
    type: String,
    required: [true, 'processor name must be provided']
  },
  core: {
    type: String,
    required: [true, 'processor core must be provided']
  },
  socket: {
    type: String,
    required: [true, 'processor socket must be provided']
  },
  info: {
    type: String,
    required: [true, 'processor info must be provided']
  },
  power: {
    type: String,
    required: [true, 'processor power must be provided']
  },
  price: {
    type: Number,
    required: [true, 'processor price must be provided']
  },
  image: {
    type: String,
    required: [true, 'processor image must be provided']
  }
}, {timestamps: true})

module.exports = mongoose.model('Processor', processorSchema)
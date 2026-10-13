const mongoose = require ('mongoose');

const motherboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'motherboard name must be provided']
  },
  info: {
    type: String,
    required: [true, 'motherboard info must be provided']
  },
  size: {
    type: String,
    required: [true, 'motherboard size must be provided']
  },
  socket: {
    type: String,
    required: [true, 'motherboard socket must be provided']
  },
  price: {
    type: Number,
    required: [true, 'motherboard price must be provided']  
  },
  image: {
    type: String,
    required: [true, 'motherboard image must be provided']
  }
},{timestamps: true})

module.exports = mongoose.model('Motherboard', motherboardSchema)
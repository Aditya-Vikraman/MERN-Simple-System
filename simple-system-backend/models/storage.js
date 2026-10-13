const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'storage name must be provided']
  },
  space: {
    type: String,
    required: [true, 'storage space must be provided']
  },
  formFactor: {
    type: String,
    required: [true, 'storage form factor must be provided']
  },
  interface: {
    type: String,
    required: [true, 'storage interface must be provided']
  },
  price: {
    type: Number,
    required: [true, 'storage price must be provided']
  },
  image: {
    type: String,
    required: [true, 'storage image must be provided']
  }
},{timestamps: true})

module.exports = mongoose.model('Storage', storageSchema)
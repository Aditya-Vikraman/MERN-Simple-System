const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'case name must be provided']
  },
  type: {
    type: String,
    required: [true, 'case type must be provided']
  },
  price: {
    type: Number,
    required: [true, 'case price must be provided']
  },
  image: {
    type: String,
    required: [true, 'case image must be provided']
  },
},{timestamps: true})

module.exports = mongoose.model('Case', caseSchema)
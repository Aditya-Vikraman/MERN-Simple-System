const Motherboard = require ('../models/motherboard.js');
const {StatusCodes} = require('http-status-codes');

const getAllMotherboards = async (req,res) => {
  const motherboards = await Motherboard.find({}).sort('socket price')
  res.status(StatusCodes.OK).json({motherboards, count: motherboards.length})
}

module.exports  = {
  getAllMotherboards
}
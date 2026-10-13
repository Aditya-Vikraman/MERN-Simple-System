const Ram = require ('../models/ram.js');
const {StatusCodes} = require('http-status-codes');

const getAllRams = async (req,res) => {
  const rams = await Ram.find({}).sort('type space price')
  res.status(StatusCodes.OK).json({rams, count: rams.length})
}

module.exports = {
  getAllRams
}
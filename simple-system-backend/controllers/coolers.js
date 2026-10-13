const Cooler = require ('../models/cooler.js');
const {StatusCodes} = require('http-status-codes');

const getAllCoolers = async (req,res) => {
  const coolers = await Cooler.find({}).sort('manufacturer price')
  res.status(StatusCodes.OK).json({coolers, count: coolers.length})
}

module.exports = {
  getAllCoolers
}
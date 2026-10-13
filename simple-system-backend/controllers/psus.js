const Psu = require ('../models/psu.js');
const {StatusCodes} = require('http-status-codes');

const getAllPsus = async (req,res) => {
  const psus = await Psu.find({}).sort('manufacturer wattage price')
  res.status(StatusCodes.OK).json({psus, count: psus.length})
}

module.exports = {
  getAllPsus
}
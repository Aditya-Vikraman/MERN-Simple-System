const Laptop = require('../models/laptop.js');
const {StatusCodes} = require('http-status-codes');

const getAllLaptops = async (req,res) => {
  const laptops = await Laptop.find({}).sort('gpu price');
  res.status(StatusCodes.OK).json({laptops, count: laptops.length})
}

module.exports = {
  getAllLaptops,
}
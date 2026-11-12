const Laptop = require('../models/laptop.js');
const {StatusCodes} = require('http-status-codes');

const getAllLaptops = async (req,res) => {
  const laptops = await Laptop.find({}).sort('gpu price');
  res.set({
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  })
  res.status(StatusCodes.OK).json({laptops, count: laptops.length})
}

module.exports = {
  getAllLaptops,
}
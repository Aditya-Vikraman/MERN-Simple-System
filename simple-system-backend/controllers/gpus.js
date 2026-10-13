const Gpu = require ('../models/gpu.js');
const {StatusCodes} = require('http-status-codes');

const getAllGpus = async (req,res) => {
  const gpus = await Gpu.find({}).sort('brand series price')
  res.status(StatusCodes.OK).json({gpus, count: gpus.length})
}

module.exports = {
  getAllGpus
}
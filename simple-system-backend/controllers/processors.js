const Processor = require ('../models/processor.js');
const {StatusCodes} = require('http-status-codes');

const getAllProcessors = async (req,res) => {
  const processors = await Processor.find({}).sort('brand socket price')
  res.status(StatusCodes.OK).json({processors, count: processors.length})
} 

module.exports = {
  getAllProcessors
}
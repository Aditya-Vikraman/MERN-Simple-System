const Case = require ('../models/case.js');
const {StatusCodes} = require('http-status-codes');

const getAllCases = async (req,res) => {
  const cases = await Case.find({}).sort('price')
  res.status(StatusCodes.OK).json({cases, count: cases.length})
}

module.exports = {
  getAllCases
}
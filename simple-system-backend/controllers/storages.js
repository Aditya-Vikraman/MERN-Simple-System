const Storage = require ('../models/storage.js');
const {StatusCodes} = require('http-status-codes');

const getAllStorages = async (req,res) => {
  const storages = await Storage.find({}).sort('space price')
  res.status(StatusCodes.OK).json({storages, count: storages.length})
}

module.exports = {
  getAllStorages
}
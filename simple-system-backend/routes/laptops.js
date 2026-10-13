const express = require('express');
const {
  getAllLaptops
} = require('../controllers/laptops.js')

const router = express.Router()

router.route('/').get(getAllLaptops)

module.exports = router;
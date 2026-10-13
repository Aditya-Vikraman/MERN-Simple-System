const express = require ('express');
const {getAllMotherboards} = require ('../controllers/motherboards.js');
const {getAllProcessors} = require ('../controllers/processors.js');
const {getAllGpus} = require ('../controllers/gpus.js');
const {getAllStorages} = require ('../controllers/storages.js');
const {getAllRams} = require ('../controllers/rams.js');
const {getAllPsus} = require ('../controllers/psus.js');
const {getAllCases} = require ('../controllers/cases.js');
const {getAllCoolers} = require ('../controllers/coolers.js');

const router = express.Router()

router.route('/motherboards').get(getAllMotherboards)
router.route('/processors').get(getAllProcessors)
router.route('/gpus').get(getAllGpus)
router.route('/storages').get(getAllStorages)
router.route('/rams').get(getAllRams)
router.route('/psus').get(getAllPsus)
router.route('/cases').get(getAllCases)
router.route('/coolers').get(getAllCoolers)

module.exports = router;
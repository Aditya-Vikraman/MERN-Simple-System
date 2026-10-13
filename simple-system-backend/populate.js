require ('dotenv').config();

const connectDB = require('./db/connect.js');

const laptopsData = require('./database/laptops.js');
const motherboardData = require('./database/motherboard.js');
const processorData = require('./database/processor.js');
const gpuData = require('./database/grapics-card.js');
const storageData = require('./database/storage.js');
const ramData = require('./database/memory-ram.js');
const psuData = require('./database/psu.js');
const caseData = require('./database/case.js');
const coolerData = require('./database/cooler.js');

const Laptop = require('./models/laptop.js');
const Motherboard = require('./models/motherboard.js');
const Processor = require('./models/processor.js');
const Gpu = require('./models/gpu.js');
const Storage = require('./models/storage.js');
const Ram = require('./models/ram.js');
const Psu = require('./models/psu.js');
const Case = require('./models/case.js');
const Cooler = require('./models/cooler.js');

const start = async () => {
  try {
    // connect to database
    await connectDB(process.env.MONGO_URI)
    console.log('connected to db')

    // remove everything from database
    await Laptop.deleteMany()
    await Motherboard.deleteMany()
    await Processor.deleteMany()
    await Gpu.deleteMany()
    await Storage.deleteMany()
    await Ram.deleteMany()
    await Psu.deleteMany()
    await Case.deleteMany()
    await Cooler.deleteMany()
    console.log('deleted data')

    // add all products to database
    await Laptop.create(laptopsData)
    await Motherboard.create(motherboardData)
    await Processor.create(processorData)
    await Gpu.create(gpuData)
    await Storage.create(storageData)
    await Ram.create(ramData)
    await Psu.create(psuData)
    await Case.create(caseData)
    await Cooler.create(coolerData)
    console.log('added data')

    console.log('Success')

    // exit node
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
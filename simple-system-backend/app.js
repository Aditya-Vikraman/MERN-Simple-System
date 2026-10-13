require('dotenv').config();
require('express-async-errors');

const path = require('path')
const express = require('express');
const cors = require('cors');

// MongoDB
const connectDB = require('./db/connect.js');

// routers
const laptopsRouter = require('./routes/laptops.js');
const productsRouter = require('./routes/products.js')

// error handler
const notFoundMiddleware = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

const app = express();

// routes - 
//  Put API routes ABOVE the static middleware so they don't get intercepted
app.use('/api/v1/laptops', laptopsRouter)
app.use('/api/v1/products', productsRouter)

// static assets - middleware -> build folder from frontend
app.use(express.static(path.join(__dirname, '../simple-system-frontend/build')))

// 3. Handle Single Page Application (SPA) routing
// This wildcard route ensures that any page refresh or deep link (e.g., /images/products, /build, /info) 
// is redirected to index.html so React/Vue/Angular router can take over.
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../simple-system-frontend/build', 'index.html'))
})

// error
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listening on PORT:${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start();
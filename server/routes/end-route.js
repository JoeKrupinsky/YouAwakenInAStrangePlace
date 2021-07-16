// Import express
const express = require('express')

const endRoutes = require('./../controllers/end-controller.js')

// Create router
const router = express.Router()

router.put('/',endRoutes.wipeEverything);


// Export router
module.exports = router
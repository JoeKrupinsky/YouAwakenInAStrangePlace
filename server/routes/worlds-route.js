// Import express
const express = require('express')

const worldsRoutes = require('./../controllers/worlds-controller.js')

// Create router
const router = express.Router()

router.post('/get',worldsRoutes.get)
router.get('/all', worldsRoutes.getAll)
router.post('/add', worldsRoutes.add)
router.put('/delete', worldsRoutes.remove)
router.put('/reset', worldsRoutes.reset)
router.put('/update',worldsRoutes.update)

// Export router
module.exports = router
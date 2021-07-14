// Import express
const express = require('express')

const playersRoutes = require('./../controllers/players-controller.js')

// Create router
const router = express.Router()

router.post('/get',playersRoutes.get)
router.get('/all', playersRoutes.getAll)
router.post('/add', playersRoutes.add)
router.put('/delete', playersRoutes.remove)
router.put('/reset', playersRoutes.reset)
router.put('/update',playersRoutes.update)

// Export router
module.exports = router
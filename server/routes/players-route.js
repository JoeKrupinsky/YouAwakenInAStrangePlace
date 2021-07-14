// Import express
const express = require('express')

const playersRoutes = require('./../controllers/players-controller.js')

// Create router
const router = express.Router()


router.get('/all', playersRoutes.getAll)
router.post('/add', playersRoutes.add)
router.put('/delete', playersRoutes.remove)
router.put('/reset', playersRoutes.reset)

// Export router
module.exports = router
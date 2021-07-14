// Import express
const express = require('express')

const heroesRoutes = require('./../controllers/heroes-controller.js')

// Create router
const router = express.Router()

router.post('/get',heroesRoutes.get)
router.get('/all', heroesRoutes.getAll)
router.post('/add', heroesRoutes.add)
router.put('/delete', heroesRoutes.remove)
router.put('/reset', heroesRoutes.reset)
router.put('/update',heroesRoutes.update)

// Export router
module.exports = router
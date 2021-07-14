// Import express
const express = require('express')

const skillsRoutes = require('./../controllers/skills-controller.js')

// Create router
const router = express.Router()


router.get('/all', skillsRoutes.getAll)
router.post('/get',skillsRoutes.get)
router.post('/add', skillsRoutes.add)
router.put('/delete', skillsRoutes.remove)
router.put('/reset', skillsRoutes.reset)

// Export router
module.exports = router
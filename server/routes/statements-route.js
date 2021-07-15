// Import express
const express = require('express')

const statementsRoutes = require('./../controllers/statements-controller.js')

// Create router
const router = express.Router()

router.post('/get',statementsRoutes.get)
router.get('/all', statementsRoutes.getAll)
router.post('/add', statementsRoutes.add)
router.post('/addMulti',statementsRoutes.addMultiple)
router.put('/delete', statementsRoutes.remove)
router.put('/reset', statementsRoutes.reset)
router.put('/update',statementsRoutes.update)


// Export router
module.exports = router
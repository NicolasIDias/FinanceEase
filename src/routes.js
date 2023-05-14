const { Router } = require('express')

const router = Router()

const UserController = require('./app/controllers/UserController')

router.get('/user', UserController.index)
router.get('/user/:id', UserController.show)
router.delete('/user/:id', UserController.delete)
router.post('/user', UserController.store)
router.put('/user/:id', UserController.update)

module.exports = router

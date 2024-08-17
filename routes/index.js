const express = require('express')
const router = express.Router()


const userController = require('../controllers/userControll')

router.get('/getuser', userController.controllerGetUser)

router.get('/allusers',userController.controllerAllUsers)

router.post('/registeruser', userController.controllerCreateUser)

router.post('/login', userController.controllerLogin)

router.put('/updateuser', userController.controllerUpdate)

router.delete('/deleteuser', userController.controlerDelete)

router.get('/routPrivate', userController.routePrivate)

module.exports = router;

const express = require('express')
const router = express.Router()

const userController = require('../controllers/userControll')

router.get('/getuser', userController.controllerGetUser)

router.get('/allusers',userController.controllerAllUsers)

router.post('/registeruser', userController.controllerCreateUser)

router.post('/login', userController.controllerLogin)

router.put('/updateuser', userController.controllerUpdate)

router.delete('/deleteuser', userController.controlerDelete)

const CategoryController = require('../controllers/categoryControll')

router.get('/allcategory',CategoryController.controllerAllCategory)

router.post('/registercategory', CategoryController.controllerCreateCategory)

router.put('/updatecategory', CategoryController.controllerUpdate)

router.delete('/deletecategory', CategoryController.controlerDelete)

module.exports = router;

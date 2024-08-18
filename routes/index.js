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

const CategoryController = require('../controllers/categoryControll')

router.get('/allcategory',CategoryController.controllerAllCategory)

router.post('/registercategory', CategoryController.controllerCreateCategory)

router.put('/updatecategory', CategoryController.controllerUpdate)

router.delete('/deletecategory', CategoryController.controlerDelete)

const ProductController = require('../controllers/productControll')

router.get('/allproduct', ProductController.controllerAllProduct)

router.post('/registerproduct', ProductController.controllerCreateProduct)

router.put('/updateproduct', ProductController.controllerUpdate)

router.delete('/deleteproduct', ProductController.controlerDelete)

router.get('/routPrivate', userController.routePrivate)

module.exports = router;

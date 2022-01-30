const uploadRoute = require('express').Router()
const UploadController = require('../controllers/UploadController');
const {authentication} = require('../middlewares/auth')

uploadRoute.post('/products', authentication, UploadController.prodImg);

module.exports = uploadRoute;

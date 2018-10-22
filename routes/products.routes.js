const express = require('express');
const router = express.Router();
const tokenVerif = require('../middlewares/tokenVerif');
const ProductsController = require('../controllers/products.controller');
const meController = require('../controllers/me.controller');

router.use('/', tokenVerif.verifUser);
router.get('/products', ProductsController.showAllProducts);
router.get('/me', meController.findUser);


module.exports = router;
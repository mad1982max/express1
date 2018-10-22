const express = require('express');
const router = express.Router();

const passwordValidation = require('../middlewares/passwordValid');
const adminController = require('../controllers/admin.controller');

router.use('/', passwordValidation.validation);
router.get('/users/:userId/generate-token', adminController.generateUserToken);
router.get('/system/generate-token', adminController.generateSystemToken);

module.exports = router;
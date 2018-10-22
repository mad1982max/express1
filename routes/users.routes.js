const express = require('express');
const router = express.Router();
const tokenVerif = require('../middlewares/tokenVerif');
const userController = require('../controllers/user.controller');

router.use('/', tokenVerif.verifSystem);

router.get('/', userController.showAllUsers);
router.get('/:id', userController.showUserbyId);
router.delete('/:id', userController.deleteUserbyId);
router.post('/', userController.addUser);
router.patch('/:id', userController.updateFields);
router.put('/:id', userController.updateCompl);

module.exports = router;
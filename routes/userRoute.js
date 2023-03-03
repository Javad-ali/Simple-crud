const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.get('/',userController.getUser)
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);





module.exports = router
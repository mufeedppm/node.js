const path = require('path');

const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

router.post('/add-user', adminController.postAddUser)

router.get('/user', adminController.getDetails)

router.get('/edit-user',adminController.getEditUser)

router.post('/edit-user', adminController.postEditUser)

router.delete('/delete-user/:userId', adminController.postDeleteUser)

module.exports = router;
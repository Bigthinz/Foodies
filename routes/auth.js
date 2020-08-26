const express = require('express')
const {signup, login, restoSign, driveSign} = require('./../controllers/authController')


const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/restaurant',restoSign)
// router.post('/driver', driveSign)

// router.post('/login', login)


module.exports = router
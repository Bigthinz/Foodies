const express = require('express')
const {getAllRestaurants,restoSign} = require('./../controllers/registerController')



const router = express.Router()

router.post('/restaurant', restoSign)

router.route('/')
      .get(getAllRestaurants)


module.exports = router
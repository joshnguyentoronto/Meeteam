const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users.js')

router.get('/', usersCtrl.getUser) 
router.get('/all', usersCtrl.getAll)
router.post('/signup', usersCtrl.signup)
router.post('/login',usersCtrl.login)
//protected routes below
router.use(require('../../config/auth'))


module.export = router;
const router = require('express').Router()

/*  Posts Router  */
const pr = require('../routes/pr.js')
/*  users Router  */
const ur = require('../routes/ur.js')

router.use('/posts', pr)
router.use('/users', ur)

module.exports = router
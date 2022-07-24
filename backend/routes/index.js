const { Router } = require('express')
const { send } = require('process')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/family', controllers.getAllFamMemb)
router.get('/family/:id', controllers.getMemberById)
router.get('/family/:id/memories', controllers.getAllMem)
router.get('/calendar', controllers.getAllCal)
router.get('/posts', controllers.getAllPosts)
router.post('/posts-new', controllers.createNewPost)
router.get('/posts/:id', controllers.getPostById)
router.delete('/posts/:id/delete', controllers.removePostById)

module.exports = router

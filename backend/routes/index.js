const { Router } = require('express')
const { send } = require('process')
const router = Router()
const { members, posts } = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/family', members.getAllFamMemb)
router.get('/family/:id', members.getMemberById)
router.get('/posts', posts.getAllPosts)
router.post('/posts-new', posts.createNewPost)
router.get('/posts/:id', posts.getPostById)
router.delete('/delete-post/:id', posts.removePostById)
router.put('/update-post/:id', posts.updatePostById)

module.exports = router

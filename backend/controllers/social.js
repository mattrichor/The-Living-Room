const { SocialPost } = require('../models/')

const getAllPosts = async (req, res) => {
  try {
    const posts = await SocialPost.find({})
    res.json(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewPost = async (req, res) => {
  try {
    const text = req.body
    const posts = await SocialPost.create(text)
    res.json(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const selPost = await SocialPost.findById(id)
    return res.json({ selPost })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePostById = async (req, res) => {
  try {
    const selPost = await SocialPost.findByIdAndUpdate(req.params.id, req.body)
    if (!selPost) {
      res.status(500).send('Post not found!')
    }
    return res.status(200).json(selPost)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const removePostById = async (req, res) => {
  try {
    const { id } = req.params
    const selPost = await SocialPost.findByIdAndDelete(id)
    return res.status(201).send('post deleted')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  removePostById,
  createNewPost,
  updatePostById
}

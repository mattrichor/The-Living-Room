const {
  CalendarPost,
  FamilyMember,
  SocialPost,
  MemoryPost
} = require('../models/')

const getAllFamMemb = async (req, res) => {
  try {
    const members = await FamilyMember.find({})
    res.json(members)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllCal = async (req, res) => {
  try {
    const cal = await CalendarPost.find({})
    res.json(cal)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllMem = async (req, res) => {
  try {
    const mem = await MemoryPost.find({})
    res.json(mem)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

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
    const { text } = req.body
    const selPost = await SocialPost.findByIdAndUpdate(req.params.id, { text })
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

const getCalById = async (req, res) => {
  try {
    const { id } = req.params
    const calPost = await CalendarPost.findById(id)
    return res.json({ calPost })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMemberById = async (req, res) => {
  try {
    const { id } = req.params
    const selMemb = await FamilyMember.findById(id)
    return res.json({ selMemb })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMemoryById = async (req, res) => {
  try {
    const { id } = req.params
    const mem = await SocialPost.findById(id)
    return res.json({ mem })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllFamMemb,
  getAllPosts,
  getAllCal,
  getAllMem,
  getMemberById,
  getPostById,
  getCalById,
  getMemoryById,
  removePostById,
  createNewPost,
  updatePostById
}

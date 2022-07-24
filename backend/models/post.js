const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SocialPost = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    author: { type: String, required: true },
    time: { type: Number, required: true },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = SocialPost

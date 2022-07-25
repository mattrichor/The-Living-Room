const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FamilyMember = new Schema(
  {
    name: { type: String, required: true },
    birthday: { type: String, required: true },
    deathday: { type: String, required: false },
    isAlive: { type: Boolean, required: false },
    proPic: { type: String, required: false },
    about: { type: String, required: false },
    images: { type: Array, required: false },
    memories: { type: Array, required: false },
    children: { type: Array, required: false },
    siblings: { type: Array, required: false }
  },
  { timestamps: true }
)

module.exports = FamilyMember

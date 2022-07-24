const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FamilyMember = new Schema(
  {
    name: { type: String, required: true },
    birthday: { type: String, required: true },
    proPic: { type: String, required: false },
    about: { type: String, required: false },
    images: { type: Array, required: false },
    memories: { type: Array, required: false }
  },
  { timestamps: true }
)

module.exports = FamilyMember

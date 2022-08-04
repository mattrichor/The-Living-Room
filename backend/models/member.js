const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FamilyMember = new Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    birthday: { type: String, required: true },
    deathday: { type: String, required: false },
    isAlive: { type: Boolean, required: false },
    proPic: { type: String, required: false },
    about: { type: String, required: false },
    images: { type: Array, required: false },
    memories: [{ type: Schema.Types.ObjectId, ref: 'Memory' }],
    children: { type: Array, required: false },
    siblings: { type: Array, required: false },
    partner: { type: Number, required: false },
    gen: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = FamilyMember

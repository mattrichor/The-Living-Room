const mongoose = require('mongoose')
const PostSchema = require('./post')
const MemberSchema = require('./member')
const CalendarSchema = require('./calendar')
const MemorySchema = require('./memory')

const SocialPost = mongoose.model('SocialPost', PostSchema)
const FamilyMember = mongoose.model('FamilyMember', MemberSchema)
const CalendarPost = mongoose.model('CalendarPost', CalendarSchema)
const MemoryPost = mongoose.model('MemoryPost', MemorySchema)

module.exports = {
  SocialPost,
  FamilyMember,
  CalendarPost,
  MemoryPost
}

const mongoose = require('mongoose')
const PostSchema = require('./post')
const MemberSchema = require('./member')
const CalendarSchema = require('./calendar')

const SocialPost = mongoose.model('SocialPost', PostSchema)
const FamilyMember = mongoose.model('FamilyMember', MemberSchema)
const CalendarPost = mongoose.model('CalendarPost', CalendarSchema)

module.exports = {
  SocialPost,
  FamilyMember,
  CalendarPost
}

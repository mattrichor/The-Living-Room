const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CalendarPost = new Schema(
  {
    eventName: { type: String, required: true },
    eventDate: { type: String, required: true },
    eventLocation: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventTime: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = CalendarPost

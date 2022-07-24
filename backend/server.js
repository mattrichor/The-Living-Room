const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const db = require('./db')

const {
  CalendarPost,
  FamilyMember,
  SocialPost,
  MemoryPost
} = require('./models')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

const db = require('../db')
const { CalendarPost, FamilyMember, SocialPost } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  await CalendarPost.deleteMany({})
  await FamilyMember.deleteMany({})
  // await SocialPost.deleteMany({})
  console.log('Deleted Collections')
}
const run = async () => {
  await main()
  db.close()
}

run()

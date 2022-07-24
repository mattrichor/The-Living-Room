const db = require('../db')
const { FamilyMember } = require('../models')

//connect to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const familyMembers = [
    {
      //array of data goes here
    }
  ]

  await FamilyMember.insertMany(familyMembers)
  console.log('Populated social posts!')
}

const run = async () => {
  await main()
  db.close()
}

run()

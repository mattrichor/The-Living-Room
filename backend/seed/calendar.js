const db = require('../db')
const { CalendarPost } = require('../models')

//connect to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const calendarEntries = [
    {
      //array of data goes here
    }
  ]

  await CalendarPost.insertMany(calendarEntries)
  console.log('Populated social posts!')
}

const run = async () => {
  await main()
  db.close()
}

run()

const db = require('../db')
const { SocialPost } = require('../models')

//connect to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      //array of data goes here
    }
  ]

  await SocialPost.insertMany(posts)
  console.log('Populated social posts!')
}

const run = async () => {
  await main()
  db.close()
}

run()

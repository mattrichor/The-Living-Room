const db = require('../db')
const { SocialPost } = require('../models')

//connect to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      title: `Grandpa George's Memorial`,
      author: 'Matthew Geyer',
      description:
        'was great to see everyone, even if under these circumstances',
      time: 32,
      likes: 0
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

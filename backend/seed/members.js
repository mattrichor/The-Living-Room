const db = require('../db')
const { FamilyMember } = require('../models')

//connect to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const familyMembers = [
    {
      name: 'Henry John Hawkins',
      birthday: 'September 19, 1892',
      deathday: 'May 2, 1964',
      isAlive: false,
      proPic: '',
      about:
        'Born in Cold Spring village in Putnam, New York. Henry dropped out of school to help support his family.. He traveled with his dad where the jobs were. In his teens he one time helped build the railroad in Ohio.A carpenter by trade Henry worked on the Franklin Delano Roosevelt Library in Hyde Park , NY and eventually worked as a salesman and building consultant for a lumber company in Waterbury, CT',
      images: [],
      memories: [
        'He stood at a stout 5 foot 2, while his wife Mabel was 5 foot 9.',
        'Around 1915 he lived in a boarding house in Hyde Park, N.Y. where he met his future wife, Mable Simpson. Henry entered the Army in WWI and served in trenches as seen in movie 1919 where he contracted tuberculosis and was not expected to live.',
        'On December 22, 1919 he was married in Connecticut. He and his wife lived in Thomaston and Plymouth, CT. One of the rooms Henry added on their home in Plymouth had windows on 3 sides for fresh air sleeping.',
        'The family raised chickens and turkeys and planted a garden during WWII.',
        'Often called ‘Hank” he had a remarkable sense of humor and was amazingly resilient - surviving diphtheria as a young man and a colostomy in 1952.',
        'He died of a heart attack in a hospital elevator at age 71 when visiting his first great-grandson in Waterbury, CT.'
      ],
      children: [], //make key tags for each family member
      siblings: [],
      gen: 1
    },
    {
      name: 'Mabel Vera Simpson',
      birthday: 'March 9, 1896',
      deathday: 'November 25, 1978',
      isAlive: false,
      proPic: '',
      about:
        'Mable was one of a large family of children. Her father died when she was 14 and the family moved to Hyde Park, NY where her mother took in borders, ironing and washing to take care of the family. She dropped out of school to help support the family in Hyde Park',
      images: [],
      memories: [
        'She attended sewing lessons at the Vanderbilt Mansion and worked in the dining room at Vassar College. Henry didn’t like the way the ‘uppity’ girls treated her. She also worked at Smith Brothers Restaurant in Poughkeepsie, N.Y.',
        'Mable and Henry were married in December 22, 1919 In Thomaston, Connecticut , Mable’s mother, Margaret (Keesler) Simpson (9/9/1861-11/24/1945) and father-in-law, John HenryHawkins (9/18/1866-7/24/1936) lived with the family until their deaths',
        'Mable’s father-in-law never called her by name – he would clap his hands when he wanted her attention. The day the door got stuck in their outhouse she heard him clapping and decided not to let him out until he did call her name',
        'Their daughter Marjorie was born in 1921, their son Harold in 1933 and Patricia in 1937. Mable was unable to work in CT because her birth certificate in N.Y could not be found. She often said if she could have stayed in school she thought she would have liked to be a teacher',
        'She survived breast cancer in 1946 and passed at age 84 in 1978 from heart failure.'
      ],
      children: [], //make key tags for each family member
      siblings: [],
      gen: 1
    },
    {
      name: 'Patricia (Pat) Hawkins',
      birthday: 'September 19, 1892',
      deathday: '',
      isAlive: true,
      proPic: '',
      about:
        'Born in Cold Spring village in Putnam, New York. Henry dropped out of school to help support his family.. He traveled with his dad where the jobs were. In his teens he one time helped build the railroad in Ohio.A carpenter by trade Henry worked on the Franklin Delano Roosevelt Library in Hyde Park , NY and eventually worked as a salesman and building consultant for a lumber company in Waterbury, CT',
      images: [],
      memories: [
        'He stood at a stout 5 foot 2, while his wife Mabel was 5 foot 9.',
        'Around 1915 he lived in a boarding house in Hyde Park, N.Y. where he met his future wife, Mable Simpson. Henry entered the Army in WWI and served in trenches as seen in movie 1919 where he contracted tuberculosis and was not expected to live.',
        'On December 22, 1919 he was married in Connecticut. He and his wife lived in Thomaston and Plymouth, CT. One of the rooms Henry added on their home in Plymouth had windows on 3 sides for fresh air sleeping.',
        'The family raised chickens and turkeys and planted a garden during WWII.',
        'Often called ‘Hank” he had a remarkable sense of humor and was amazingly resilient - surviving diphtheria as a young man and a colostomy in 1952.',
        'He died of a heart attack in a hospital elevator at age 71 when visiting his first great-grandson in Waterbury, CT.'
      ],
      children: [], //make key tags for each family member
      siblings: [],
      gen: 2
    },
    {
      name: 'George Arthur Geyer',
      birthday: 'May 14, 1935',
      deathday: 'September 20th, 2021',
      isAlive: false,
      proPic: '',
      about:
        'A handyman all of his life. A lifelong teacher, learner, and provider. Worked as professor & spent his free time sailing, flying, and working on model airplanes.',
      images: [],
      memories: [],
      children: [], //make key tags for each family member
      siblings: [],
      gen: 2
    },
    {
      name: 'Greg Arthur Geyer',
      birthday: 'July 29, 1961',
      deathday: '',
      isAlive: true,
      proPic: '',
      about: '',
      images: [],
      memories: [],
      children: [], //make key tags for each family member
      siblings: [],
      gen: 3
    },
    {
      name: 'Cindy Johnson Geyer',
      birthday: 'July 31, 1961',
      deathday: '',
      isAlive: true,
      proPic: '',
      about: '',
      images: [],
      memories: [],
      children: [], //make key tags for each family member
      siblings: [],
      gen: 3
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

const db = require('../db')
const { FamilyMember } = require('../models')

//connect to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const familyMembers = [
    {
      _id: 1,
      name: 'Henry John Hawkins',
      birthday: 'September 19, 1892',
      deathday: 'May 2, 1964',
      isAlive: false,
      proPic: 'https://i.imgur.com/8uHt1yq.png',
      about:
        'Born in Cold Spring village in Putnam, New York. Henry dropped out of school to help support his family.. He traveled with his dad where the jobs were. In his teens he one time helped build the railroad in Ohio.A carpenter by trade Henry worked on the Franklin Delano Roosevelt Library in Hyde Park , NY and eventually worked as a salesman and building consultant for a lumber company in Waterbury, CT',
      images: [
        `https://i.imgur.com/KBmCuMj.jpg`,
        `https://i.imgur.com/BJ0KVlL.jpg`
      ],
      memories: [
        'He stood at a stout 5 foot 2, while his wife Mabel was 5 foot 9.',
        'Around 1915 he lived in a boarding house in Hyde Park, N.Y. where he met his future wife, Mable Simpson. Henry entered the Army in WWI and served in trenches as seen in movie 1919 where he contracted tuberculosis and was not expected to live.',
        'On December 22, 1919 he was married in Connecticut. He and his wife lived in Thomaston and Plymouth, CT. One of the rooms Henry added on their home in Plymouth had windows on 3 sides for fresh air sleeping.',
        'The family raised chickens and turkeys and planted a garden during WWII.',
        'Often called ‘Hank” he had a remarkable sense of humor and was amazingly resilient - surviving diphtheria as a young man and a colostomy in 1952.',
        'He died of a heart attack in a hospital elevator at age 71 when visiting his first great-grandson in Waterbury, CT.'
      ],
      children: [3], //make key tags for each family member
      siblings: [],
      gen: 1,
      partner: 2
    },
    {
      _id: 2,
      name: 'Mabel Vera Simpson',
      birthday: 'March 9, 1896',
      deathday: 'November 25, 1978',
      isAlive: false,
      proPic: 'https://i.imgur.com/PupKtQ3.png',
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
      children: [3], //make key tags for each family member
      siblings: [],
      gen: 1,
      partner: 1
    },
    {
      _id: 3,
      name: 'Patricia Hawkins',
      birthday: 'September 30, 1937',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/gF7hwb3.jpg',
      about:
        'Talented, strong, smart, short - always giving unconditional love.',
      images: [],
      memories: [
        `My mom rubbed my back as I fell asleep for years.   If I woke up in the middle of the night she would help me fall asleep.  Once I got a little bit older to realize this for a short period of time I would pretend to sleepwalk or roll out into the hallway ( as would Brad ) and she would help us get to bed, rub our backs... :)   very fond memories. - Written by Greg Geyer`
      ],
      children: [7, 8, 9], //make key tags for each family member
      siblings: [],
      gen: 2,
      partner: 4
    },
    {
      _id: 4,
      name: 'George Geyer',
      birthday: 'May 14, 1935',
      deathday: 'September 20th, 2021',
      isAlive: false,
      proPic: 'https://i.imgur.com/pj7QfGa.png',
      about:
        'A handyman & a lifelong teacher, learner, and provider. Worked as a college physics professor & spent his free time sailing, flying, and working on model airplanes.',
      images: [],
      memories: [
        `My dad got me a boat and taught me how to sail and things that we share are the love of sailing and another the love of teaching /coaching.   We spent a good deal of very close time together by ourselves over the last 10 years or so having great talks about just about everything.   Some of my memories now are his memories told back to me -Written by Greg Geyer`
      ],
      children: [7, 8, 9], //make key tags for each family member
      siblings: [],
      gen: 2,
      partner: 3
    },
    {
      _id: 5,
      name: 'John Johnson, Jr',
      birthday: 'October 24, 1935',
      deathday: 'May 18, 2021',
      isAlive: false,
      proPic: 'https://i.imgur.com/sPGwrd0.png',
      about:
        'Chemical engineer at DuPont for his entire career. Switched to a computer engineer back when a computer took up an entire room and used punch cards! An only child, he learned to share his heart with his 3 daughters and supported their athletic and extracurricular efforts',
      images: [],
      memories: [
        `Married his high school sweetheart Phyllis who remained the love of his life and partner until his untimely passing during the covid pandemic`,
        `Known for his belief that rational discourse could settle the most heated of disagreements; his willingness to lend a helping hand and provide an answer on a variety of topics; his love of singing (barbershop, large chorus and church), golf and the beach.`
      ],
      children: [10, 11, 12], //make key tags for each family member
      siblings: [],
      gen: 2,
      partner: 6
    },
    {
      _id: 6,
      name: 'Pyllis Johnson',
      birthday: 'April 20, 1936',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/D1ihZwV.png',
      about:
        'Valedictorian, mother of 3, channeled her intellect into managing the finances of the home, being president of the PTA and other community organizations, active in the church, sharing her cookie baking talents and instilling in her daughters the importance of education, kindness and manners',
      images: [],
      memories: [
        `Fond memories of her smiles when she was holding her new grandsons`
      ],
      children: [10, 11, 12], //make key tags for each family member
      siblings: [],
      gen: 2,
      partner: 5
    },

    {
      _id: 7,
      name: 'Diane Geyer',
      birthday: 'July 29, 1961',
      deathday: '',
      isAlive: false,
      proPic: 'https://i.imgur.com/QpteuSc.png',
      about:
        'Always the encouraging voice in the heads of her siblings, & always remembered everything, no matter how small. Kind and generous - loved cats and people, the beach, butterflies and flowers.',
      images: [],
      memories: [
        `My sister and I were very close until she started dating Mike from up the road.  At that point I went out of my way to bug them and interrupt them and get on Mike's nerves.   At the time it just felt like the thing to do.   But in reality I was not yet old enough to realize I was just super jealous someone else was hanging out with my best friend. Pretty normal stuff - Written by Greg Geyer`
      ],
      children: [], //make key tags for each family member
      siblings: [9, 8],
      gen: 3
    },
    {
      _id: 8,
      name: 'Brad Geyer',
      birthday: 'July 31, 1961',
      deathday: '2020',
      isAlive: false,
      proPic: 'https://i.imgur.com/APCS1aD.png',
      about:
        'My younger brother who I always admire.  He was cooler than me in high school, beat my records in track, got all the girls swooning, etc. He was enterprising and productive and a father with a wonderful family. - Written by Greg Geyer',
      images: [`https://i.imgur.com/unCU5ON.jpg`],
      memories: [
        `I remember shooting off rockets in roys field as kids, feeling protective and competing in a loving way.  And, I remember shooting off rockets with Brad the last time only a short while ago.    He loved it and had no one to do it with - we had a great time and he loved making models.`
      ],
      children: [], //make key tags for each family member
      siblings: [9, 7],
      gen: 3
    },
    {
      _id: 9,
      name: 'Greg Geyer',
      birthday: 'July 29, 1961',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/Qgs1iOd.png',
      about: '',
      images: [`https://i.imgur.com/n0OyijU.jpg`],
      memories: [],
      children: [13, 14], //make key tags for each family member
      siblings: [8, 7],
      gen: 3,
      partner: 10
    },
    {
      _id: 10,
      name: 'Cindy Geyer',
      birthday: 'July 31, 1961',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/j8MVfGg.png',
      about: '',
      images: [`https://i.imgur.com/2JnNNbX.jpg`],
      memories: [],
      children: [13, 14], //make key tags for each family member
      siblings: [7, 8],
      gen: 3,
      partner: 9
    },
    {
      _id: 11,
      name: 'Julie Olszko',
      birthday: 'May 16, 1958',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/0vIfRDg.png',
      about:
        'Worked as an occupational therapist with young children until her retirement- I could always hear how much she cared about her patients when she talked with fondness about their stories and how they changed over the years',
      images: [],
      memories: [
        `Tolerated her bratty younger sister (me) trying to hang with her and her friends, used to read to mewhen I was little. I was in awe of how much more grown up and cool she always seemed than me. - Written by Cindy Geyer`,
        `In the last year has taken on the responsibility of caring for mom and has done so with grace and humor and love`
      ],
      children: [], //make key tags for each family member
      siblings: [12, 8],
      gen: 3
    },
    {
      _id: 12,
      name: 'Catherine Dison',
      birthday: 'June 20, 1966',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/IpBq1fo.png',
      about:
        'HS English teacher- lover of language and literature, passionate about fairness toward others who are marginalized, delights in her idiosyncrasies that provide a space for others (students) to feel OK about their own uniqueness, a most avid Beatles fan.',
      images: [],
      memories: [
        `As a young child she was very close to Julie. As the third girl out of three, it always seemed she could get away with more than her older siblings! - Written by Cindy Geyer`,
        `Fond memories of music- great example the trash song written and sung with her nephews on vacation at the beach house`
      ],
      children: [], //make key tags for each family member
      siblings: [7, 12],
      gen: 3
    },

    {
      _id: 13,
      name: 'Matthew Geyer',
      birthday: 'July 10, 1995',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/ZH2NslT.jpg',
      about: '',
      images: [],
      memories: [],
      children: [], //make key tags for each family member
      siblings: [14],
      gen: 4
    },
    {
      _id: 14,
      name: 'Justin Geyer',
      birthday: 'July 10, 1995',
      deathday: '',
      isAlive: true,
      proPic: 'https://i.imgur.com/fSOcEHd.jpg',
      about: '',
      images: [`https://i.imgur.com/S2IOfb0.png`],
      memories: [],
      children: [], //make key tags for each family member
      siblings: [13],
      gen: 4
    }
  ]

  await FamilyMember.insertMany(familyMembers)
  console.log('Populated Fam!!')
}

const run = async () => {
  await main()
  db.close()
}

run()

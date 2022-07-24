import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PostCard from '../components/PostCard'

const Home = () => {
  const [posts, setPosts] = useState([])

  let navigate = useNavigate()

  const BASE_URL = 'http://localhost:3001/api'

  // useEffect(() => {
  //   const getAnimals = async () => {
  //     const res = await axios.get(`${BASE_URL}/animals`)
  //     console.log(res)
  //     setAnimals(res.data)
  //   }
  //   getAnimals()
  // }, [])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/posts`)
      console.log(res)
      setPosts(res.data)
    }
    getPosts()
  }, [])

  const handleInput = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1 className="title">Five Flags</h1>
      <div className="missing-form"></div>
      <div className="entities">
        <h2 className="missing-title">Missing Entities</h2>
        <section className="entity-grid">
          {posts.map((result) => (
            <div key={result._id}>
              <PostCard
                onClick={() => {
                  navigate(`/${result._id}`)
                }}
                image={result.image}
                title={result.title}
                author={result.author}
                description={result.description}
                time={result.time}
                likes={result.likes}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home

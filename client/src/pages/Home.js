import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PostCard from '../components/PostCard'
import NewPostForm from '../components/NewPostForm'

const Home = () => {
  const [posts, setPosts] = useState([])

  let navigate = useNavigate()

  const BASE_URL = 'http://localhost:3001/api'

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/posts`)
      console.log(res)
      setPosts(res.data)
    }
    getPosts()
  }, [])

  return (
    <div>
      <h1 className="title">The Living Room</h1>
      <div className="post-fields">
        <NewPostForm />
        <h2 className="missing-title">Feed</h2>
        <section className="post-grid">
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

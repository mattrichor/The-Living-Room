import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PostCard from '../components/PostCard'
import NewPostForm from '../components/NewPostForm'

const Home = () => {
  const [posts, setPosts] = useState([])

  let navigate = useNavigate()

  const BASE_URL = 'http://localhost:3001/api'

  return (
    <div>
      <h1 className="title">The Living Room</h1>
      <div className="post-fields">
        <NewPostForm />
        <h2 className="missing-title">Feed</h2>
        <div className="grid-main">
          <section className="grid-post">
            <PostCard />
          </section>
          <section className="grid-cal"></section>
        </div>
      </div>
    </div>
  )
}

export default Home

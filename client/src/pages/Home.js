import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Posts from '../components/Posts'
import NewPostForm from '../components/NewPostForm'

const Home = () => {
  const [posts, setPosts] = useState([])

  let navigate = useNavigate()

  const BASE_URL = 'http://localhost:3001/api'

  return (
    <div>
      <h1 className="title">The Living Room</h1>
      <div className="grid-main">
        <section className="grid-post">
          <h2 className="Feed">Feed</h2>
          <Posts />
        </section>
        <NewPostForm className="grid-form" />
      </div>
    </div>
  )
}

export default Home

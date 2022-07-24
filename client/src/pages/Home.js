import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PostCard from '../components/PostCard'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({
    title: '',
    image: '',
    description: '',
    author: '',
    time: '',
    likes: 0
  })

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

  const handleInput = (event) => {
    event.preventDefault()
  }

  // const handleChange = (e) => {
  //   const value = e.target.value
  //   setNewPostData({
  //     ...newPostData,
  //     [e.target.name]: value
  //   })
  // }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPostData = {
      title: 'title test',
      author: 'Matthew Geyer',
      description: 'this is a new post!',
      time: 32,
      likes: 0
    }
    await axios
      .post(`${BASE_URL}/posts-new`, JSON.toStringify(newPostData))
      .then((response) => {
        console.log(response.status)
        console.log(response.data.token)
      })
  }

  // const createNewPost = async () => {
  //   await axios
  //     .post(`${BASE_URL}/posts`, {
  //       title: `title test`,
  //       author: 'Matthew Geyer',
  //       description: 'this is a new post!',
  //       time: 32,
  //       likes: 0
  //     })
  //     .then((response) => {
  //       console.log(response)
  //     })
  // }

  return (
    <div>
      <h1 className="title">Five Flags</h1>
      <div className="missing-form"></div>
      <div className="entities">
        <button onClick={handleSubmit}>POST POST</button>
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

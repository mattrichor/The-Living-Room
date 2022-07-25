import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PostCard from '../components/PostCard'
import NewPostForm from '../components/NewPostForm'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [posted, togglePosted] = useState(false)
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

  const handleChange = (e) => {
    e.preventDefault()
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios
      .post(`${BASE_URL}/posts-new`, JSON.stringify(newPost))
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
      <h1 className="title">The Living Room</h1>
      <div className="post-fields">
        <NewPostForm
          onSubmit={handleSubmit}
          newPost={newPost}
          onChange={handleChange}
        />
        <h2 className="missing-title">Feed</h2>
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

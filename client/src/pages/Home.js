import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Posts from '../components/Posts'
import NewPostForm from '../components/NewPostForm'
import tree from '../buttons/tree2.gif'
import addNote from '../buttons/addnote.png'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [newPost, toggleNewPost] = useState(false)

  let navigate = useNavigate()

  const BASE_URL = 'http://localhost:3001/api'

  return (
    <div>
      <h1 className="title">The Living Room</h1>
      <div className="grid-main">
        <section className="grid-post">
          <div className="Feed">Feed</div>
          {newPost === true ? <NewPostForm /> : <div></div>}
          <Posts />
        </section>
        <div className="grid-form">
          <div className="img_wrap">Create new Post!</div>
          <img
            className="post-tree"
            src={tree}
            onClick={() => {
              toggleNewPost(true)
            }}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Home

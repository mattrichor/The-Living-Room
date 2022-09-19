import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Posts from '../components/Posts'
import NewPostForm from '../components/NewPostForm'
import tree from '../buttons/tree2.gif'
import addNote from '../buttons/addnote.png'

import { BASE_URL } from '../services/api'

const Social = () => {
  const [posts, setPosts] = useState([])
  const [newPost, toggleNewPost] = useState(false)

  let navigate = useNavigate()

  return (
    <div>
      <div className="grid-main">
        <section className="grid-post">
          <h3 className="Feed">Feed</h3>
          {newPost === true ? <NewPostForm /> : <div></div>}
          <Posts />
        </section>
        <div className="grid-form">
          <div className="img_wrap">
            <span className="tree-text">What's on your mind?</span>
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
    </div>
  )
}

export default Social

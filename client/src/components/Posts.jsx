import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'
import PostCard from './PostCard'

const BASE_URL = 'http://localhost:3001/api'

const Post = () => {
  const [posts, setPosts] = useState([])
  const [posted, togglePosted] = useState(false)
  const [fam, setFam] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/posts`)
      console.log(res)
      setPosts(res.data)
    }
    getPosts()
  }, [posted])

  const deletePost = async (_id) => {
    let res = await axios
      .delete(`${BASE_URL}/delete-post/${_id}`)
      .then((res) => {
        console.log(res.status)
        togglePosted(true)
      })
  }

  return (
    <div className="post-card">
      {posts.map((res) => (
        <PostCard
          key={res._id}
          img={res.image}
          title={res.title}
          author={res.author}
          time={res.time}
          description={res.description}
          _id={res._id}
          likes={res.likes}
          deletePost={() => deletePost(res._id)}
          // updatePost={() => updatePost(res._id)}
          togglePosted={() => togglePosted()}
          posted={posted}
        ></PostCard>
      ))}
    </div>
  )
}
export default Post

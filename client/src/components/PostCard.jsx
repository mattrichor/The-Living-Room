import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3001/api'





const PostCard = (props) => {

  const [posts, setPosts] = useState([])
  const [posted, togglePosted] = useState(false)

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/posts`)
      console.log(res)
      setPosts(res.data)
    }
    getPosts()
  }, [posted === true])



  const deletePost = async (_id) => {
    let res = await axios.delete(`${BASE_URL}/delete-post/${_id}`)
    .then((res) => {
      console.log(res.status)
      console.log(res.data.token)
      togglePosted(true)
    })
  }
 


    return (
      <div className="post-card">
        {posts.map((result) => (
          <div key={result._id}>
            <div className="img-wrapper">
              <img className="img"src={result.image} alt={""} />
            </div>
            <div className="posts flex-col">
              <h2 className="post-title">{result.title}</h2>
              <p className="post-author"> by {result.author}</p>
              <h6 className="time">{result.time}</h6>
              <p className='post-text'> {result.description}</p>
              <p>Likes: {result.likes}</p>
              <button className="update" onClick={""}></button>
              <button className="delete" onClick={() =>deletePost(result._id)}>X</button>
            </div>
        </div>
         ))}
      </div>
    )
  }
  export default PostCard
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3001/api'



const PostCard = (props) => {

  let id = props._id
  const deletePost = async () => {
    let res = await axios.delete(`${BASE_URL}/delete-post/${id}`)
    .then((res) => {
      console.log(res.status)
      console.log(res.data.token)
    })
  }


    return (
      <div className="post-card">
        <div className="img-wrapper">
          <img className="img"src={props.image} alt={""} />
        </div>
        <div className="posts flex-col">
          <h2 className="post-title">{props.title}</h2>
          <p className="post-author"> by {props.author}</p>
          <h6 className="time">{props.time}</h6>
          <p className='post-text'> {props.description}</p>
          <p>Likes: {props.likes}</p>
          <button className="update" onClick={""}></button>
          <button className="delete" onClick={deletePost}>X</button>
        </div>
      </div>
    )
  }
  export default PostCard
import React from "react"
import { useState, useEffect, createRef} from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3001/api'





const PostCard = () => {

  const [posts, setPosts] = useState([])
  const [posted, togglePosted] = useState(false)
  const [edit, setEdit] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updatedDesc, setUpdatedDesc] = useState('')

  // const [newTitle, setNewTitle] = useState('')
  // const [newDescription, setNewDescription] = useState('')

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
      togglePosted(true)
    })
  }

  const newTitle = createRef()
  const newDescription = createRef()

  const saveUpdate = (_id) => {
    // setUpdatedTitle(newTitle.current.value)
    // setUpdatedDesc(newDescription.current.value)
    setEdit(false)
    console.log(_id)
    updatePost(_id, newTitle.current.value, newDescription.current.value)
  }
 

  const updatePost = async (_id, title, description) => {
    let res = await axios.put(`${BASE_URL}/update-post/${_id}`, {title, description})
    .then((res) => {
      console.log(res.status)
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
              <div className="title-grid"><h2 className="post-title">{result.title}</h2><span className="menu">...</span></div>
              <p className="post-author"> by {result.author}</p>
              <h6 className="time">{result.time}</h6>
              <p className='post-text'> {result.description}</p>
              <p>Likes: {result.likes}</p>
              <button className="update" onClick={() =>setEdit(true)}>edit</button>
              <button className="delete" onClick={() =>deletePost(result._id)}>X</button>
              <div className='edit'>
                  {edit? (
                    <div>
                            <input
                                className='post-title-input'
                                type="text"
                                defaultValue={result.title}
                                placeholder="New Title"
                                ref={newTitle}
                            ></input>
                            <input className='post-description-input'
                                type="text"
                                defaultValue={result.description}
                                placeholder="New Description"
                                ref={newDescription}></input>
                                <br></br>
                                <button className="save-edits" onClick={() => saveUpdate(result._id)}> Save Edits</button>
                    </div>
        ) : (
            <div></div>
        )}
    </div>
            </div>
        </div>
         ))}
      </div>
    )
  }
  export default PostCard
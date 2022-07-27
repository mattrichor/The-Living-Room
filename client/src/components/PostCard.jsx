import React from "react"
import { useState, useEffect, createRef} from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3001/api'


const PostCard = (props) => {

    const [edit, setEdit] = useState(false)
    const newTitle = createRef()
    const newDescription = createRef()
  
    const saveUpdate = (_id) => {
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
<div key={props._id}>
            <div className="img-wrapper">
              <img className="img"src={props.image} alt={""} />
            </div>
              <div className="title-grid"><h2 className="post-title">{props.title}</h2>
              <button className="menu" onClick={props.showMenu}>...</button></div> 
                <button className="update" onClick={() =>setEdit(true)}>edit</button>
                <button className="delete" onClick={() =>props.deletePost(props._id)}>X</button>
              <p className="post-author"> by {props.author}</p>
              <h6 className="time">{props.time}</h6>
              <p className='post-text'> {props.description}</p>
              <p>Likes: {props.likes}</p>
             
              <div className='edit'>
                  {edit? (
                    <div>
                            <input
                                className='post-title-input'
                                type="text"
                                defaultValue={props.title}
                                placeholder="New Title"
                                ref={newTitle}
                            ></input>
                            <input className='post-description-input'
                                type="text"
                                defaultValue={props.description}
                                placeholder="New Description"
                                ref={newDescription}></input>
                                <br></br>
                                <button className="save-edits" onClick={() => saveUpdate(props._id)}> Save Edits</button>
                    </div>
        ) : (
            <div></div>
        )}
    </div>
         
        </div>
)
        }

export default PostCard
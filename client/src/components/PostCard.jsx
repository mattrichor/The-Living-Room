import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'

import editIcon from '../buttons/editnote.png'
import saveIcon from '../buttons/save.png'
import deleteIcon from '../buttons/deletenote.png'

const BASE_URL = 'http://localhost:3001/api'

const PostCard = (props) => {
  const [edit, setEdit] = useState(false)
  const newTitle = createRef()
  const newDescription = createRef()
  const [menu, toggleMenu] = useState(false)

  const showMenu = () => {
    if (menu === false) {
      toggleMenu(true)
    } else {
      toggleMenu(false)
    }
  }
  const saveUpdate = (_id) => {
    setEdit(false)
    console.log(_id)
    updatePost(_id, newTitle.current.value, newDescription.current.value)
    window.location.reload(false)
  }

  const updatePost = async (_id, title, description) => {
    let res = await axios
      .put(`${BASE_URL}/update-post/${_id}`, { title, description })
      .then((res) => {
        console.log(res.status)
        toggleMenu(false)
        props.togglePosted(true)
      })
  }

  return (
    <div key={props._id}>
      <div className="edit">
        {edit ? (
          <div>
            <div className="img-wrapper">
              <img className="pro-pic" src={editIcon} alt={''} />
            </div>
            <div className="title-grid">
              <input
                className="post-title title-form"
                type="text"
                defaultValue={props.title}
                placeholder="New Title"
                ref={newTitle}
              ></input>
              <div className="menu" onClick={showMenu}>
                ...
                {menu ? (
                  <div className="dropdown">
                    <img
                      className="update"
                      src={editIcon}
                      onClick={() => setEdit(true)}
                    ></img>
                    <img
                      className="delete"
                      src={deleteIcon}
                      onClick={() => props.deletePost(props._id)}
                    ></img>
                  </div>
                ) : (
                  <div> </div>
                )}
              </div>
            </div>
            <p className="post-author"> by {props.author}</p>
            <h6 className="time">{props.time}</h6>
            <textarea
              className="post-text text-form"
              type="text"
              defaultValue={props.description}
              placeholder="New Description"
              ref={newDescription}
            ></textarea>
            <br></br>
            <img
              className="save-edits"
              src={saveIcon}
              onClick={() => saveUpdate(props._id)}
            ></img>
          </div>
        ) : (
          <div className="post-full">
            <div className="img-wrapper">
              <img className="pro-pic" src={editIcon} alt={''} />
            </div>
            <div className="title-grid">
              <div className="post-title">{props.title}</div>
              <div className="menu" onClick={showMenu}>
                ...
                {menu ? (
                  <div className="dropdown">
                    <img
                      className="update"
                      src={editIcon}
                      onClick={() => setEdit(true)}
                    ></img>
                    <img
                      className="delete"
                      src={deleteIcon}
                      onClick={() => props.deletePost(props._id)}
                    ></img>
                  </div>
                ) : (
                  <div> </div>
                )}
              </div>
            </div>
            <p className="post-author"> by {props.author}</p>
            <h6 className="time">{props.time}</h6>
            <p className="post-text"> {props.description}</p>
            <p>Likes: {props.likes}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostCard

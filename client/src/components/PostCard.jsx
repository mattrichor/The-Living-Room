import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'

import editIcon from '../buttons/editnote.png'
import saveIcon from '../buttons/save.png'
import deleteIcon from '../buttons/deletenote.png'
import { BASE_URL } from '../services/api'

const PostCard = (props) => {
  const [edit, setEdit] = useState(false)
  const [menu, toggleMenu] = useState(false)
  const [fam, setFam] = useState([])
  const [pic, setPic] = useState('')
  const [togglePics, setTogglePics] = useState(false)

  const newTitle = createRef()
  const newDescription = createRef()

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
    setTogglePics(true)
    props.togglePosted(true)
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

  useEffect(() => {
    const getFam = async () => {
      const res = await axios.get(`${BASE_URL}/family`)
      setFam(res.data)
    }
    getFam()
  }, [props.posted])

  useEffect(() => {
    fam.map((member) => {
      if (member.name == props.author) {
        setPic(member.proPic)
      }
    })
  }, [fam])

  return (
    <div key={props._id}>
      <div>
        {edit ? (
          <div className="edit">
            <div className="img-wrapper">
              <img
                className="post-pic"
                src={pic != '' ? pic : editIcon}
                alt={''}
              />
            </div>
            <div className="title-grid">
              <input
                className="post-title"
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
            <button
              className="save-edits"
              src={saveIcon}
              onClick={() => saveUpdate(props._id)}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="post-full">
            <div className="img-wrapper">
              <img
                className="post-pic"
                src={pic != '' ? pic : editIcon}
                alt={''}
              />
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

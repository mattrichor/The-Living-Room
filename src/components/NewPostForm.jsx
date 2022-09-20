import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const NewPostForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [likes, setLikes] = useState(0)
  const [time, setTime] = useState('')

  const createNewpost = async (e) => {
    e.preventDefault()
    await axios
      .post(`${BASE_URL}/posts-new`, {
        title,
        description,
        author,
        likes,
        time: new Date().toDateString()
      })
      .then((res) => {
        console.log(res.status)
        setTitle('')
        setAuthor('')
        setDescription('')
        setLikes(0)
        setTime('')
        window.location.reload(false)
      })
  }

  return (
    <div className="edit">
      <form onSubmit={(e) => createNewpost(e)}>
        <div className="title-grid">
          <input
            className="post-title title-form"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br></br>
        </div>
        <input
          className="post-author-new"
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <br></br>
        <textarea
          className="post-text text-form"
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br></br>
        <button className="submit" type="submit">
          {' '}
          Submit
        </button>
      </form>
    </div>
  )
}
export default NewPostForm

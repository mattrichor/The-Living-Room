import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const NewPostForm = (props) => {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [likes, setLikes] = useState(0)
  const [time, setTime] = useState('')


  const [posted, togglePosted] = useState(false)


  const BASE_URL = 'http://localhost:3001/api'


  const createNewpost = async (e) => {
    e.preventDefault()
    let now = new Date().toDateString()
    console.log(time)
    setTime(now)
    await axios
      .post(`${BASE_URL}/posts-new`, {title, description, author, likes, time})
      .then((res) => {
        console.log(res.status)
        console.log(res.data.token)
        setTitle('')
        setAuthor('')
        setDescription('')
        setLikes(0)
        setTime('')
      })
  }

    return (
<div> <h2>New Post</h2>
  <form onSubmit={(e) => createNewpost(e)}>
    <input
    className='post-title'
      type="text"
      value={title}
      placeholder="Title"
      onChange={(e) => setTitle(e.target.value)}
    ></input>
    <br></br>
    <input
    className='post-author'
      type="text"
      value={author}
      placeholder="Author"
      onChange={(e) => setAuthor(e.target.value)}
    ></input>
    <br></br>
    <input
    className='post-description'
      type="text"
      value={description}
      placeholder="Description"
      onChange={(e) => setDescription(e.target.value)}
    ></input>
    <br></br>
     <button className="submit" type="submit"> Submit</button>
  </form>
</div>
)
 }
    export default NewPostForm
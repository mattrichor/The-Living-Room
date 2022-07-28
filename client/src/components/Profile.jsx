import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'
import PostCard from './PostCard'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
  const BASE_URL = 'http://localhost:3001/api'

  const [fam, setFam] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getFambyId = async () => {
      const res = await axios.get(`${BASE_URL}/family/${id}`)
      console.log(res)
      setFam(res.data.selMemb)
    }
    getFambyId()
  }, [])

  return (
    <div>
      <div className="family-details">
        <img
          className="profile"
          src={fam.name != null ? fam.proPic : ''}
          alt={'fam.name'}
        />
      </div>
      <div className="info-wrapper flex-col">
        <h3> {fam.name != null ? fam.name : ''}</h3>
        <p>Born {fam.name != null ? fam.birthday : ''}</p>
      </div>
      <div className="about">{fam.name != null ? fam.about : ''}</div>
      <ul className="memories">
        {fam.name != null
          ? fam.memories.forEach((memory) => <li>{memory}</li>)
          : ''}
      </ul>
    </div>
  )
}

export default Profile

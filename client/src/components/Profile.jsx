import React, { memo } from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'
import PostCard from './PostCard'
import { useNavigate, useParams } from 'react-router-dom'
import MemberNode from './MemberNode'

const Profile = () => {
  const BASE_URL = 'http://localhost:3001/api'

  const [fam, setFam] = useState('')
  const [child, setChild] = useState(null)

  let navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const getFambyId = async () => {
      const res = await axios.get(`${BASE_URL}/family/${id}`)
      setFam(res.data.selMemb)
    }
    getFambyId()
  }, [])

  useEffect(() => {
    const getFam = async () => {
      const res = await axios.get(`${BASE_URL}/family`)
      let childrens = []
      fam.children.forEach((child) => {
        childrens = [...childrens, res.data[child]]
      })
      console.log(childrens)
      setChild(childrens)
    }
    if (fam != '') {
      getFam()
    }
  }, [fam])

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
          ? fam.memories.map((memory) => <li>{memory}</li>)
          : ''}
      </ul>
      <ul>
        <h3>Children:</h3>
        {child != null
          ? child.map((child) => (
              <MemberNode
                onClick={() => {
                  navigate(`/${child._id}`)
                }}
                name={child.name}
                proPic={child.proPic}
                birthday={child.birthday}
                death={child.deathday}
                isAlive={child.isAlive}
                about={child.about}
                _id={child._id}
                key={child._id}
                images={child.images}
                memories={child.memories}
                children={child.children}
                siblings={child.siblings}
                partner={child.partner}
                gen={child.gen}
              ></MemberNode>
            ))
          : ''}
      </ul>
    </div>
  )
}

export default Profile

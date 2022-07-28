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
  const [spouse, setSpouse] = useState(null)
  const [spouseKey, setSpouseKey] = useState('')

  let navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const getFambyId = async () => {
      const res = await axios.get(`${BASE_URL}/family/${id}`).then((res) => {
        setFam(res.data.selMemb)
        setSpouseKey(res.data.selMemb.partner)
        console.log(res.data.selMemb.partner)
      })
    }
    getFambyId()
  }, [])

  useEffect(() => {
    const getFam = async () => {
      const res = await axios.get(`${BASE_URL}/family`)
      let childrens = []
      fam.children.forEach((child) => {
        childrens = [...childrens, res.data[child - 1]] //very weird that I have to do this
      })
      console.log(childrens)
      console.log(spouseKey)
      setChild(childrens)
      setSpouse(res.data[spouseKey - 1])
    }
    // if (fam != '') {
    getFam()
    // }
  }, [fam, spouseKey])

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
        <h3 className="fam-name"> {fam.name != null ? fam.name : ''}</h3>
        <div>Born {fam.name != null ? fam.birthday : ''}</div>
      </div>
      <div className="about">{fam.name != null ? fam.about : ''}</div>
      <ul className="memories">
        {fam.name != null
          ? fam.memories.map((memory) => <li>{memory}</li>)
          : ''}
      </ul>
      <div className="rel-grid">
        <div style={{ textAlign: 'center' }}>
          Partner
          <div className="partner">
            {spouse != null ? (
              <MemberNode
                onClick={() => {
                  navigate(`/${spouse._id}`)
                }}
                name={spouse.name}
                proPic={spouse.proPic}
                birthday={spouse.birthday}
                death={spouse.deathday}
                isAlive={spouse.isAlive}
                about={spouse.about}
                _id={spouse._id}
                key={spouse._id}
                images={spouse.images}
                memories={spouse.memories}
                children={spouse.children}
                siblings={spouse.siblings}
                partner={spouse.partner}
                gen={spouse.gen}
              ></MemberNode>
            ) : (
              ''
            )}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          Children
          <div className="children">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

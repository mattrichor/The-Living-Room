import React from 'react'
import { useState, useEffect, createRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import MemberNode from '../components/MemberNode'

import { BASE_URL } from '../services/api'

const FamilyTree = () => {
  const [fam, setFam] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getFam = async () => {
      const res = await axios.get(`${BASE_URL}/family`)
      console.log(res)
      setFam(res.data)
      console.log(fam)
    }
    getFam()
  }, [])

  return (
    <body className="family-tree">
      <div className="generations">
        {fam.map((res) => (
          <MemberNode
            className={`gen${res.gen}`}
            onClick={() => {
              navigate(`/${res._id}`)
            }}
            name={res.name}
            proPic={res.proPic}
            birthday={res.birthday}
            death={res.deathday}
            isAlive={res.isAlive}
            about={res.about}
            _id={res._id}
            key={res._id}
            images={res.images}
            memories={res.memories}
            children={res.children}
            siblings={res.siblings}
            partner={res.partner}
            gen={res.gen}
          ></MemberNode>
        ))}
      </div>
    </body>
  )
}

export default FamilyTree

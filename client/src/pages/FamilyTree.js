import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'
import MemberNode from '../components/MemberNode'

const BASE_URL = 'http://localhost:3001/api'

const FamilyTree = () => {
  const [fam, setFam] = useState([])

  useEffect(() => {
    const getFam = async () => {
      const res = await axios.get(`${BASE_URL}/family`)
      console.log(res)
      setFam(res.data)
    }
    getFam()
  }, [])

  return (
    <div className="canvas">
      {fam.map((res) => (
        <MemberNode
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
        ></MemberNode>
      ))}
    </div>
  )
}

export default FamilyTree

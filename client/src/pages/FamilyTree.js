import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'

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
      <button className="tree-gen-button"></button>
    </div>
  )
}

export default FamilyTree

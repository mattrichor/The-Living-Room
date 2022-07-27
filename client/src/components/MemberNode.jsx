import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const MemberNode = (props) => {
  return (
    <div>
      <img className="pro-pic" src={props.proPic} alt="" />
      <h1>{props.name}</h1>
    </div>
  )
}

export default MemberNode

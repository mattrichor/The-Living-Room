import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const MemberNode = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <img className="pro-pic" src={props.proPic} alt="" />
    </div>
  )
}

export default MemberNode

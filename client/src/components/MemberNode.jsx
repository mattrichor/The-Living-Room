import React from 'react'
import { useState, useEffect, createRef } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const MemberNode = (props) => {
  if (props.gen === 1) {
    return (
      <div className="gen1">
        <img className="pro-pic" src={props.proPic} alt="" />
        <h1>{props.name}</h1>
      </div>
    )
  } else if (props.gen === 2) {
    return (
      <div className="gen2">
        <img className="pro-pic" src={props.proPic} alt="" />
        <h1>{props.name}</h1>
      </div>
    )
  } else if (props.gen === 3) {
    return (
      <div className="gen3">
        <img className="pro-pic" src={props.proPic} alt="" />
        <h1>{props.name}</h1>
      </div>
    )
  } else if (props.gen === 4) {
    return (
      <div className="gen4">
        <img className="pro-pic" src={props.proPic} alt="" />
        <h1>{props.name}</h1>
      </div>
    )
  }
}

export default MemberNode

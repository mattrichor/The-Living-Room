import React from 'react'

const MemberNode = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <img className="pro-pic" src={props.proPic} alt="" />
      <div className="node-name"></div>
    </div>
  )
}

export default MemberNode

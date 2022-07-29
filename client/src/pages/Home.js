import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Posts from '../components/Posts'
import NewPostForm from '../components/NewPostForm'
import tree from '../buttons/tree2.gif'
import livingRoom from '../buttons/livingroom.png'

const Home = () => {
  return (
    <div className="container">
      <img src={livingRoom}></img>
      <h1>The Living Room</h1>
      <div className="welcome-text">
        <span className="whitespace"></span>A Social App for Families
      </div>
      <button className="welcome-button">Enter</button>
    </div>
  )
}

export default Home

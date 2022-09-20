import { Link } from 'react-router-dom'
import livingRoom from '../buttons/livingroom.png'

const Home = () => {
  return (
    <div className="container">
      <div>
        <img className="image" src={livingRoom}></img>
      </div>
      <div className="enter-btn">
        <h1>The Living Room</h1>
        <div className="welcome-text">
          <span className="whitespace"></span>A Social Space for Families
        </div>
        <Link className="nav" to="/posts">
          <button className="welcome-button">Enter</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

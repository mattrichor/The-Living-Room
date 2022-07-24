import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link className="home" to='/'><span>Home</span></Link>
        <Link className='posts' to='/posts'><span>Posts</span></Link>
        <Link className='calendar' to='/calendar'><span>Calendar</span></Link>
        <Link className='family-tree' to='/tree'><span>Family Tree</span></Link>
      </nav>
    </header>
  )
}
export default Header
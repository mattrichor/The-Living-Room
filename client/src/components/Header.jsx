import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header-container'>
      <header className="header">
        <nav>
          <Link className="nav" to='/'><span>Home</span></Link>
          <Link className='nav' to='/posts'><span>Posts</span></Link>
          <Link className='nav' to='/calendar'><span>Calendar</span></Link>
          <Link className='nav' id='tree-nav' to='/tree'><span>Family Tree</span></Link>
        </nav>
      </header>
      </div>
  )
}
export default Header
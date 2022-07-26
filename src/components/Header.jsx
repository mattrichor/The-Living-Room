import { Link } from 'react-router-dom'
import homeicon from '../buttons/homeicon1.png'
import postsicon from '../buttons/postsicon2.png'
import treeicon from '../buttons/treeicon1.png'

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <nav>
          <Link className="nav" to="/">
            <img className="nav-link" src={homeicon} alt="" />
          </Link>
          <Link className="nav" to="/posts">
            <img className="nav-link" src={postsicon} alt="" />
          </Link>
          <Link className="nav" id="tree-nav" to="/tree">
            <img className="nav-link" src={treeicon} alt="" />
          </Link>
        </nav>
      </header>
    </div>
  )
}
export default Header

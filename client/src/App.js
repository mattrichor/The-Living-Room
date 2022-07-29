import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
//Page imports here
import Header from './components/Header'
import FamilyTree from './pages/FamilyTree'
import Profile from './components/Profile'
import Social from './pages/Social'

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Social />} />
          <Route path="/tree" element={<FamilyTree />} />
          <Route path="/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

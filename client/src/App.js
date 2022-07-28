import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
//Page imports here
import Header from './components/Header'
import FamilyTree from './pages/FamilyTree'

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" />
          <Route path="/tree" element={<FamilyTree />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

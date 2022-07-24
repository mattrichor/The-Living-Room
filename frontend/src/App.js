import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EntityDetails from './pages/EntityDetails'
import AnimalDetails from './pages/AnimalDetails'
import Header from './components/Header'

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:entityId" element={<EntityDetails />} />
          <Route path="/:animalId" element={<AnimalDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

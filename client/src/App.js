import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
//Page imports here
import Header from './components/Header'

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" />
          <Route path="/calendar" />
          <Route path="/tree" />
        </Routes>
      </main>
    </div>
  )
}

export default App

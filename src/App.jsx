import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Comparador de inversiones</h1>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  )
}

function About() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

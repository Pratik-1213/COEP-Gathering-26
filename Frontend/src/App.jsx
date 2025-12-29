import './App.css'
import { Routes, Route } from "react-router-dom"

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Home from './pages/Home'
import Events from './pages/Events'
import Sports from './pages/Sports'
import Team from './pages/Team'
import Passes from './pages/Passes'
import Gallery from './pages/Gallery'
import Main from './pages/Main'
import ScrollToHash from './components/common/ScrollToHash'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash/>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/passes" element={<Passes />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

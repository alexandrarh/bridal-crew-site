import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Venues from './pages/Venues'
import Schedule from './pages/Schedule'
import Accommodation from './pages/Accommodation'
import Attire from './pages/Attire'
import Bachelorette from './pages/Bachelorette'
import BridalCrew from './pages/BridalCrew'
import Financials from './pages/Financials'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/attire" element={<Attire />} />
        <Route path="/bachelorette" element={<Bachelorette />} />
        <Route path="/bridal-crew" element={<BridalCrew />} />
        <Route path="/financials" element={<Financials />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
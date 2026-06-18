import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Venues from './pages/Venues'
import Schedule from './pages/Schedule'
import Accommodation from './pages/Accommodation'
import Attire from './pages/Attire'
import Bachelorette from './pages/Bachelorette'
import BridalCrew from './pages/BridalCrew'
import Financials from './pages/Financials'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/venues" element={<Layout><Venues /></Layout>} />
        <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
        <Route path="/accommodation" element={<Layout><Accommodation /></Layout>} />
        <Route path="/attire" element={<Layout><Attire /></Layout>} />
        <Route path="/bachelorette" element={<Layout><Bachelorette /></Layout>} />
        <Route path="/bridal-crew" element={<Layout><BridalCrew /></Layout>} />
        <Route path="/financials" element={<Layout><Financials /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
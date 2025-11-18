import { Routes, Route } from 'react-router-dom'
import './style/App.css'
import NavBar from './pages/pagePieces/Navigation.jsx';
import Dashboard from './pages/Dashboard.jsx';
import StatsPage from './pages/statsPage.jsx';
import Games from './pages/Games.jsx';
import InfoPage from './pages/InfoPage.jsx';
import Login from './pages/Login.jsx';
import Footer from './pages/pagePieces/Footer.jsx';
import './style/index.css';

const catsViewed = [];


export default function App() {
  return (
    <div className='content'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/games" element={<Games />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export {catsViewed};
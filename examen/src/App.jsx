import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import HomePage from './components/HomePage'
import Panel from './components/Panel'
import Support from './components/Support'
import Footer from './components/Footer'
import MinecraftPage from './components/MinecraftPage'
import ThreeCards from './components/ThreeCards'
import DomeinPage from './components/DomeinPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HomePage />
            <Panel />
            <Support />
            <ThreeCards />
          </>
        } />
        <Route path="/minecraft" element={<MinecraftPage />} />
        <Route path="/domein" element={<DomeinPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

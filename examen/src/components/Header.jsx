import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container py-4 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-2">
        <img src="/media/logo.png" alt="Game Grid logo" style={{height: 40}} />
        <span className="fw-bold" style={{color: '#ffb900', fontSize: 24}}>GAME GRID</span>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-dark" to="/minecraft">Minecraft</Link></li>
          <li className="nav-item"><Link className="nav-link text-dark" to="/domein">Domein</Link></li>
        </ul>
      </nav>
    </header>
  )
}
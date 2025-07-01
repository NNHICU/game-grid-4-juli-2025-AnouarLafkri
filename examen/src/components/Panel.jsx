import { BsGear } from 'react-icons/bs';

export default function Panel() {
  return (
    <section className="container my-5 py-5" id="beheren">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h5 className="text-secondary mb-2"><span className="me-2"><BsGear /></span>beheren</h5>
          <h2 className="fw-bold mb-3">In controle met ons fantastische paneel</h2>
          <p className="mb-2">Beheer je Minecraft server hosting, VPS en andere diensten met ons gebruiksvriendelijke controlepaneel. Ons paneel is in-house ontwikkeld om de beste ervaring te garanderen.</p>
          <ul className="mb-2">
            <li>Rijke aan features. We voegen voortdurend nieuwe features toe. Heb je een suggestie? Laat het ons weten!</li>
            <li>Snel. Geen enkele vertraging bij het beheren van je Minecraft server, VPS of andere hosting dienst</li>
          </ul>
          <a href="#" className="btn btn-outline-dark">Bekijk de demo</a>
        </div>
        <div className="col-md-6 text-center">
          <img src="/media/screen1.png" alt="Controlepaneel" className="img-fluid rounded shadow" style={{maxHeight: 480}} />
        </div>
      </div>
    </section>
  )
}
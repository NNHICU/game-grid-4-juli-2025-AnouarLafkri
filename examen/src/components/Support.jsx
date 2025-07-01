import { BsLifePreserver } from 'react-icons/bs';

export default function Support() {
  return (
    <section className="container my-5" id="support">
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 mb-4 mb-md-0">
          <h5 className="text-secondary mb-2"><span className="me-2"><BsLifePreserver /></span>support</h5>
          <h2 className="fw-bold mb-3">Krijg geweldige hulp van een team experts</h2>
          <p className="mb-2">Of je nu een vraag hebt over het installeren van een mod pack voor je Minecraft server of de beste vps wilt. Ons team van experts staat klaar om je vragen te beantwoorden. We hebben ook een kennisbank vol met tutorials over Minecraft server hosting, VPS en nog veel meer.</p>
          <a href="#" className="btn btn-outline-dark">Bekijk de kennis bank</a>
        </div>
        <div className="col-md-6 text-center">
          <img src="/media/screen2.png" alt="Support" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
        </div>
      </div>
    </section>
  )
}
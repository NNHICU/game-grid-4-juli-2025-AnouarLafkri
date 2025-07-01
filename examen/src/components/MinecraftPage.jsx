import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsLifePreserver } from 'react-icons/bs';

function MinecraftPage() {
  return (
    <>

      <section className="container my-5 text-center">
        <h1 className="display-4 fw-bold">Minecraft<br /><span style={{color: '#ffb900'}}>server hosting</span></h1>
        <p className="lead mb-4">Krachtige Minecraft serverhosting met fantastische ondersteuning. Sluit je aan bij 50.000+ spelers die Game Grid al vertrouwen.</p>
        <div className="d-flex justify-content-center gap-3 mb-5">
          <Button variant="dark">Bekijk pakketten</Button>
          <Button variant="outline-dark">Bekijk alle features</Button>
        </div>
      </section>

      <section className="container mb-5">
        <Row className="g-4">
        <Col lg={6}>
          <div className="card-box full-height">
            <h5>Minecraft server hosting</h5>
            <p>Je eigen server.Alle mods, versies en plugins. Java & Bedrock.</p>
            <img src="media\minecraft6.png" alt="Minecraft server hosting"/>
          </div>
        </Col>

        <Col lg={6}>
          <Row className="g-4">
            <Col xs={12}>
              <div className="card-box half-height">
                <h5>Virtual private servers</h5>
                <p>AMD Ryzen 9 of Intel Xeon CPU's.</p>
                <img src="media\minecraft5.webp" alt="chest" height={50} className="ms-auto d-block" />
              </div>
            </Col>
            <Col xs={6}>
              <div className="card-box half-height">
                <h5>Domeinnamen</h5>
                <p>Uitgebreide lijst met TLD's.</p>
              </div>
            </Col>
            <Col xs={6}>
              <div className="card-box half-height">
                <h5>Webhosting</h5>
                <img src="media\minecraft4.png" alt="Virtual private servers" height={50} className="ms-auto d-block" />
                <p>Onbeperkte hosting. Simpel en snel.</p>

              </div>

            </Col>
          </Row>
        </Col>
      </Row>
      </section>

      <section className="container mb-5">
        <h3 className="fw-bold text-center mb-4">Kies je Minecraft server hosting pakket</h3>
        <p className="text-center mb-4">hier vind je al onze paketen</p>
        <Row className="g-4">
          {[
            {name: 'Wood', ram: '1 GB', price: '€ 3,50'},
            {name: 'Stone', ram: '2 GB', price: '€ 6,50'},
            {name: 'Coal', ram: '3 GB', price: '€ 9,50'},
            {name: 'Iron', ram: '4 GB', price: '€ 12,50'},
            {name: 'Lapis', ram: '5 GB', price: '€ 15,00'},
            {name: 'Gold', ram: '6 GB', price: '€ 18,00'},
            {name: 'Diamond', ram: '8 GB', price: '€ 24,00'},
            {name: 'Emerald', ram: '10 GB', price: '€ 30,00'},
            {name: 'Sand', ram: '12 GB', price: '€ 35,00'},
            {name: 'Clay', ram: '14 GB', price: '€ 40,00'},
            {name: 'Granite', ram: '16 GB', price: '€ 45,00'},
            {name: 'Diorite', ram: '20 GB', price: '€ 55,00'},
          ].map((pkg) => (
            <Col md={3} sm={6} xs={12} key={pkg.name}>
              <div className="border rounded-4 p-4 h-100 bg-white text-center">
                <h6 className="fw-bold mb-1">{pkg.name}</h6>
                <div className="mb-2">{pkg.ram} RAM</div>
                <div className="fw-bold mb-2" style={{fontSize: 24}}>{pkg.price}</div>
                <div className="mb-2 small text-muted">per maand</div>
                <Button variant="dark" className="w-100 rounded-pill">Bestel nu</Button>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section className="container my-5">
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

      <section className="container my-5 py-5" id="beheren">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">In controle met ons fantastische paneel</h2>
            <p className="mb-2">Beheer je Minecraft server hosting, VPS en andere diensten met ons gebruiksvriendelijke controlepaneel. Ons paneel is in-house ontwikkeld om de beste ervaring te garanderen.</p>
            <ul className="mb-2">
              <li>Rijke aan features. We voegen voortdurend nieuwe features toe. Heb je een suggestie? Laat het ons weten!</li>
              <li>Snel. Geen enkele vertraging bij het beheren van je Minecraft server, VPS of andere hosting dienst</li>
            </ul>
            <a href="#" className="btn btn-outline-dark">Bekijk de demo</a>
          </div>
          <div className="col-md-6 text-center">
            <img src="/media/minecraft3.png" alt="Controlepaneel" className="img-fluid rounded shadow" style={{maxHeight: 480}} />
          </div>
        </div>
      </section>
    </>
  );
}

export default MinecraftPage;
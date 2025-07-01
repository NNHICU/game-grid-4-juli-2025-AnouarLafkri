import Panel from './Panel';
import Support from './Support';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <section className="container mb-5">
        <Row className="g-4">
          <Col lg={6}>
            <div className="card-box full-height">
              <h5>Minecraft server hosting</h5>
              <p>Je eigen server. Alle mods, versies en plugins. Java & Bedrock.</p>
              <img src="media\minecraft.webp" alt="Minecraft server hosting dashboard met Java en Bedrock ondersteuning" height={200} />
              <Link to="/domein" className="btn btn-outline-dark btn-sm mt-2">Registreer domein</Link>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-4">
              <Col xs={12}>
                <div className="card-box half-height">
                  <h5>Virtual private servers</h5>
                  <p>AMD Ryzen 9 of Intel Xeon CPU's.</p>
                  <img src="media\rocket.svg" alt="Virtual private server met AMD Ryzen 9 en Intel Xeon processors" height={175} className="ms-auto d-block" />
                  <Link to="/domein" className="btn btn-outline-dark btn-sm mt-2">Registreer domein</Link>
                </div>
              </Col>
              <Col xs={6}>
                <div className="card-box half-height">
                  <h5>Domeinnamen</h5>
                  <p>Uitgebreide lijst met TLD's.</p>
                  <Link to="/domein" className="btn btn-outline-dark btn-sm mt-2">Registreer domein</Link>
                </div>
              </Col>
              <Col xs={6}>
                <div className="card-box half-height">
                  <h5>Webhosting</h5>
                  <p>Onbeperkte hosting. Simpel en snel.</p>
                  <Link to="/domein" className="btn btn-outline-dark btn-sm mt-2">Registreer domein</Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <Panel />
      <Support />
    </>
  );
}

export default HomePage;
import Panel from './Panel';
import Support from './Support';
import { Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <>
      <section className="container mb-5">
        <Row className="g-4">
          <Col lg={6}>
            <div className="card-box full-height">
              <h5>Minecraft server hosting</h5>
              <p>Je eigen server. Alle mods, versies en plugins. Java & Bedrock.</p>
              <img src="/media/minecraft6.png" alt="Minecraft server hosting" />
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-4">
              <Col xs={12}>
                <div className="card-box half-height">
                  <h5>Virtual private servers</h5>
                  <p>AMD Ryzen 9 of Intel Xeon CPU's.</p>
                  <img src="/media/minecraft5.webp" alt="chest" height={50} className="ms-auto d-block" />
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
                  <img src="/media/minecraft4.png" alt="Webhosting" height={50} className="ms-auto d-block" />
                  <p>Onbeperkte hosting. Simpel en snel.</p>
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
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGear, BsCashStack } from 'react-icons/bs';
import { FaRegListAlt } from 'react-icons/fa';

function DomeinPage() {
  return (
    <>
      <section className="container text-center my-5">
        <h1 className="display-4 fw-bold mb-2">Registreer<br /><span style={{color: '#ffb900'}}>jouw domein</span></h1>
        <p className="mb-4">DNS-beheer, veel beschikbare TLD's en geweldige ondersteuning..</p>
        <input type="text" className="form-control mx-auto mb-5" style={{maxWidth: 400}} placeholder="Registreer een domeinnaam..." />
      </section>

      <section className="container mb-5">
        <Row className="g-4">
          <Col md={4}>
            <div className="border rounded-4 p-4 h-100 bg-white text-center">
              <div className="mb-2" style={{fontSize: 32, color: '#ffb900'}}><BsGear /></div>
              <h6 className="fw-bold">DNS-beheer</h6>
              <p className="mb-0">Elk domein wordt geleverd met DNS-beheer zonder extra kosten.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="border rounded-4 p-4 h-100 bg-white text-center">
              <div className="mb-2" style={{fontSize: 32, color: '#ffb900'}}><BsCashStack /></div>
              <h6 className="fw-bold">Betrouwbare prijzen</h6>
              <p className="mb-0">We houden onze prijzen voor elk TLD zo stabiel mogelijk.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="border rounded-4 p-4 h-100 bg-white text-center">
              <div className="mb-2" style={{fontSize: 32, color: '#ffb900'}}><FaRegListAlt /></div>
              <h6 className="fw-bold">21 beschikbare TLD's</h6>
              <p className="mb-0">Kies uit onze uitgebreide lijst met beschikbare topleveldomeinen.</p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default DomeinPage;
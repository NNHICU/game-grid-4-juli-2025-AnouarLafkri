import React from 'react';

function ThreeCards() {
  return (
    <section className="container mb-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="border rounded-4 p-4 h-100 bg-white">
            <h6 className="fw-bold">Minecraft server</h6>
            <p className="mb-3">Start je eigen Minecraft server in een paar seconden, direct online.</p>
            <a href="#" className="btn btn-dark w-100 rounded-pill">Start je minecraft server</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border rounded-4 p-4 h-100 bg-white">
            <h6 className="fw-bold">Virtual Private Server</h6>
            <p className="mb-3">Krachtige en schaalbare VPS hosting voor elk project.</p>
            <a href="#" className="btn btn-dark w-100 rounded-pill">Lanceer jouw VPS</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border rounded-4 p-4 h-100 bg-white">
            <h6 className="fw-bold">Webhosting</h6>
            <p className="mb-3">Betrouwbare websitehosting zonder onnodige beperkingen.</p>
            <a href="#" className="btn btn-dark w-100 rounded-pill">Je website hosten</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeCards;
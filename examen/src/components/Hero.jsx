export default function Hero() {
  return (
    <section className="container text-center my-5">
      <h1 className="display-4 fw-bold mb-3">
        De ultieme hosting<br />
        <span style={{color: '#ffb900'}}>voor jouw project</span>
      </h1>
      <p className="lead mb-4">
        Lanceer vandaag nog je Minecraft server of VPS. Geniet van geweldige klantenservice, fantastische prestaties en het beste controlepaneel.
      </p>
      <div className="d-flex justify-content-center gap-3 mb-5">
        <a href="#" className="btn btn-dark px-4 py-2">Bekijk server hosting</a>
        <a href="#" className="btn btn-outline-dark px-4 py-2">Lanceer jouw VPS</a>
      </div>
    </section>
  )
}
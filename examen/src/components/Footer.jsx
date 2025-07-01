export default function Footer() {
  return (
    <>

      <footer className="bg-light mt-5 pt-5 pb-3 border-top">
        <div className="container pb-5">
          <div className="row text-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <img src="/media/logo.png" alt="Game Grid logo" style={{height: 40}} /><br />
              <span className="fw-bold" style={{color: '#ffb900', fontSize: 22}}>GAME GRID</span>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <nav>
                <ul className="list-unstyled mb-0">
                  <li><a href="#home" className="text-dark">Home</a></li>
                  <li><a href="#minecraft" className="text-dark">Minecraft</a></li>
                  <li><a href="#domein" className="text-dark">Domein</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-4">
              <p className="small text-muted mb-0">
                GameGrid is de Nederlandse Minecraft server hosting.<br />
                Start direct je Minecraft server.<br />
                Ook voor VPS, webhosting en domeinen.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
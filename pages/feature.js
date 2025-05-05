
import Head from 'next/head'
import Link from 'next/link'

export default function Feature() {
  return (
    <>
      <Head>
        <title>David Gomez Ojeda</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        
<style>{`
  body {
    background: white;
    color: black;
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px 40px;
    background: white;
    border-bottom: none;
  }
  .nav .logo {
    position: absolute;
    left: 20px;
    top: 20px;
  }
  .nav .logo img {
    height: 80px;
  }
  .nav-links {
    display: flex;
    gap: 30px;
    font-size: 20px; line-height: 1.1;
  }
  .nav a {
    color: black;
    text-decoration: none;
  }
  .container {
    padding: 100px 60px 60px 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    justify-content: center;
  }
  .video-card {
    width: 100%;
  }
  .video-wrapper {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    background: #f2f2f2;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  iframe {
    width: 130%;
    height: auto;
    object-fit: cover;
    margin-left: -15%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .credits {
    font-size: 15px;
    margin-top: 8px;
    line-height: 1.02;
    margin-top: 0;
    margin-bottom: 0;
  }
`}</style>

      </Head>
      
<nav className="nav">
  <div className="logo">
    <img src="/logo.png" alt="Logo" />
  </div>
  <div className="nav-links">
    <Link href="/commercials">Commercials</Link>
    <Link href="/feature">Feature</Link>
    <Link href="/about">About</Link>
  </div>
</nav>


      <div className="container">
        
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/p1DH9-prniI" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits">
        <p>Director: Dan Percival and Paco Cabezas</p>
        <p>DOP: Tomasso Fiorilli and Pau Esteve</p>
        <p>AMC</p>
      </div>
    </div>

    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/cwYwGkhx7B0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits">
        <p>Director: Rupert Wyatt</p>
        <p>DOP: Guillermo Garza</p>
        <p>MBC Studios</p>
      </div>
    </div>

    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/l9tP4M8URhQ" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits">
        <p>Director: J.A. Bayona</p>
        <p>DOP: Pedro Duque</p>
        <p>NETFLIX</p>
      </div>
    </div>

    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/doXX0vja4qs" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits">
        <p>Director: Rómulo Aguillaume</p>
        <p>DOP: Iván Caso</p>
        <p>Buendia Estudios</p>
      </div>
    </div>

      </div>
    </>
  )
}

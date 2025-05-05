
import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
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
        <iframe src="https://www.youtube.com/embed/4fKUnhAIVp0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Disney “The last verse”</p><p>Director: Henry Alex Rubin</p><p>DOP: Mathieu Plainfosse</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/fQ9vubEsND4" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>YouTube “What a time to be a sports fan”</p><p>Director: Matias & Mathias</p><p>DOP: Mauro Chiarello</p><p>Prod Co: TwentyfourSeven</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/2xdXKNQYN2o" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Nike Football “Awaken your madness”</p><p>Director: Sam Pilling</p><p>DOP: Norm Li</p><p>Prod Co: TwentyfourSeven</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://player.vimeo.com/video/956438949" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Amazon Ads “Media Envy”</p><p>Director: Sam Pilling</p><p>DOP: Daniel Voldheim</p><p>Prod Co: TwentyfourSeven</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://player.vimeo.com/video/1056187253" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>PUMA “Year of Sport”</p><p>Director: Ryan Chun</p><p>DOP: Joao de Botelho</p></div>
    </div>
    

        
      
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://player.vimeo.com/video/939540217" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Uber - Mobility</p><p>Director: Augusto Papilla</p><p>DOP: Octavio Arias</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/00JAcrLKLMU" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Renault 5 “Be the first”</p><p>Director: Man vs Machine</p><p>DOP: Daniel Bouquet</p><p>Prod Co: TwentyfourSeven</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/Ewzvf3dkl4Q" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>HERMES “Barenia”</p><p>Director: James Gray</p><p>DOP: Daniel Bouquet</p><p>Prod Co: TwentyfourSeven</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://player.vimeo.com/video/1072448845" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Hyundai</p><p>Director: Julien & Quentin</p><p>DOP: Frederick Backar</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/AMHMU0YPFEc" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Jardiance “Little Pill, big story”</p><p>Director: Declan Whitebloom</p><p>Prod Co: TwentyfourSeven</p></div>
    </div>
    
      
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/r08aKGGHAUQ" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Expedia “One Key Traveler”</p><p>Director: Kim Gehrig</p><p>DOP: Emmanuel “Chivo” Lubezki</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/7JhbAE30_mc" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Expedia “One Key Pretzels”</p><p>Director: Kim Gehrig</p><p>DOP: Emmanuel “Chivo” Lubezki</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/YiuRkiuTpLk" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Expedia “One Key Auntie”</p><p>Director: Kim Gehrig</p><p>DOP: Emmanuel “Chivo” Lubezki</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/MRXWlFVVw2s" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Expedia “One Key Work Trip”</p><p>Director: Kim Gehrig</p><p>DOP: Emmanuel “Chivo” Lubezki</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/umx8WIe1vCI" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Samsung “The Vault”</p><p>Director: Hanki Goh</p><p>DOP: Ottar Gudnason</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://ticklefilm.com/work/finn-2/" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>FINN</p><p>Director: Anders Holm & Sebastian Presto</p><p>DOP: Anders Flatland</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/mzgnc7mEhtI" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Armani “Si”</p><p>Director: Amber Grace Johnson</p><p>DOP: Benoit Debbie</p><p>Prod Co: TwentyfourSeven</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/Z4kpumyYSdw" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Netflix Peluquería</p><p>Director: Andrés Salmoyraghi & Rafa Saubidet</p><p>DOP: Pablo Hernández</p><p>Prod Co: Pueblo Films</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/lSREtNfN0EI" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Netflix Élite</p><p>Director: Andrés Salmoyraghi & Rafa Saubidet</p><p>DOP: Pablo Hernández</p><p>Prod Co: Pueblo Films</p></div>
    </div>
    
    <div className="video-card">
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/_Ei5Z1qfRG4" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </div>
      <div className="credits"><p>Netflix El país de los sueños</p><p>Director: Andrés Salmoyraghi & Rafa Saubidet</p><p>DOP: Pablo Hernández</p><p>Prod Co: Pueblo Films</p></div>
    </div>
    
      </div>
    </>
  )
}

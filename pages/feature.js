
import { useState } from 'react';

export default function Feature() {
  const [lightbox, setLightbox] = useState(null);
  const videos = [
{ title: "Daryl Dixon Season 3", url: "https://www.youtube.com/embed/p1DH9-prniI", director: "Dan Percival and Paco Cabezas", dop: "Tomasso Fiorilli and Pau Esteve", prodco: "AMC" },
{ title: "Desert Warrior", url: "https://www.youtube.com/embed/cwYwGkhx7B0", director: "Rupert Wyatt", dop: "Guillermo Garza", prodco: "MBC Studios" },
{ title: "La sociedad de la nieve", url: "https://www.youtube.com/embed/l9tP4M8URhQ", director: "J.A. Bayona", dop: "Pedro Duque", prodco: "NETFLIX" },
{ title: "By Ana Milan trailer", url: "https://www.youtube.com/embed/doXX0vja4qs", director: "Rómulo Aguillaume", dop: "Iván Caso", prodco: "Buendia Estudios" }
];

  const navStyle = {
    width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'black',
    color: 'white', fontWeight: 'bold', fontSize: '11px', display: 'flex',
    justifyContent: 'center', alignItems: 'center', textDecoration: 'none'
  };

  return (
    <div style={ padding: '40px', fontFamily: 'sans-serif', position: 'relative' }>
      <div style={
        position: 'absolute', top: 10, left: 10, display: 'flex',
        justifyContent: 'center', gap: '30px', width: '100%', zIndex: 10
      }>
        <a href="/commercials" style={...navStyle}>Commercials</a>
        <a href="/feature" style={...navStyle}>Feature</a>
        <a href="/" style={...navStyle}>Home</a>
      </div>

      <h1 style={ fontSize: '32px' }>Feature</h1>
      <div style={ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }>
        {videos.map((v, i) => (
          <div key={i} onClick={() => setLightbox(v.url)} style={ cursor: 'pointer' }>
            <div className="video-container">
              <iframe src={v.url} frameBorder="0" allowFullScreen></iframe>
            </div>
            <p><strong>{v.title}</strong><br />Director: {v.director}<br />DOP: {v.dop}<br />Prod Co: {v.prodco}</p>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="overlay" onClick={() => setLightbox(null)}>
          <div style={ width: '80%', maxWidth: '960px' }>
            <div className="video-container">
              <iframe src={lightbox} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

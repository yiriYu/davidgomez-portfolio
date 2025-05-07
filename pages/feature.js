
import { useState } from 'react';

export default function Feature() {
  const [lightbox, setLightbox] = useState(null);

  const videos = [
    {
      title: "Daryl Dixon Season 3",
      url: "https://www.youtube.com/embed/p1DH9-prniI",
      director: "Dan Percival and Paco Cabezas",
      dop: "Tomasso Fiorilli and Pau Esteve",
      prodco: "AMC"
    },
    {
      title: "Desert Warrior",
      url: "https://www.youtube.com/embed/cwYwGkhx7B0",
      director: "Rupert Wyatt",
      dop: "Guillermo Garza",
      prodco: "MBC Studios"
    },
    {
      title: "La sociedad de la nieve",
      url: "https://www.youtube.com/embed/l9tP4M8URhQ",
      director: "J.A. Bayona",
      dop: "Pedro Duque",
      prodco: "NETFLIX"
    },
    {
      title: "By Ana Milan trailer",
      url: "https://www.youtube.com/embed/doXX0vja4qs",
      director: "Rómulo Aguillaume",
      dop: "Iván Caso",
      prodco: "Buendia Estudios"
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        width: '100%',
        zIndex: 10
      }}>
        <a href="/commercials" style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'black',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none'
        }}>Commercials</a>
        <a href="/feature" style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'black',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none'
        }}>Feature</a>
        <a href="/" style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'black',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none'
        }}>Home</a>
      </div>

      <h1 style={{ fontSize: '32px' }}>Feature</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        alignItems: 'start'
      }}>
        {videos.map((v, i) => (
          <div key={i} onClick={() => setLightbox(v.url)} style={{ cursor: 'pointer' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe src={v.url} frameBorder="0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen></iframe>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }}>
              <strong>{v.title}</strong><br />
              Director: {v.director}<br />
              DOP: {v.dop}<br />
              Prod Co: {v.prodco}
            </p>
          </div>
        ))}
      </div>
      {lightbox && (
        <div className="overlay" onClick={() => setLightbox(null)}>
          <div style={{ width: '80%', maxWidth: '960px' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe src={lightbox} frameBorder="0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

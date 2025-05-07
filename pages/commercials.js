
import { useState } from 'react';

export default function Commercials() {
  const [lightbox, setLightbox] = useState(null);

  const videos = [
    {
      title: "Disney “The last verse”",
      url: "https://www.youtube.com/embed/4fKUnhAIVp0",
      director: "Henry Alex Rubin",
      dop: "Mathieu Plainfosse",
      prodco: "Tickle Film"
    },
    {
      title: "Nike Football “Awaken your madness”",
      url: "https://www.youtube.com/embed/2xdXKNQYN2o",
      director: "Sam Pilling",
      dop: "Norm Li",
      prodco: "TwentyfourSeven"
    },
    {
      title: "Amazon Ads “Media Envy”",
      url: "https://player.vimeo.com/video/956438949",
      director: "Sam Pilling",
      dop: "Daniel Voldheim",
      prodco: "TwentyfourSeven"
    },
    {
      title: "PUMA “Year of Sport”",
      url: "https://player.vimeo.com/video/1056187253",
      director: "Ryan Chun",
      dop: "Joao de Botelho",
      prodco: "Falca"
    },
    {
      title: "Youtube “What a time to be a sports fan”",
      url: "https://www.youtube.com/embed/fQ9vubEsND4",
      director: "Matias & Mathias",
      dop: "Mauro Chiarello",
      prodco: "TwentyfourSeven"
    },
    {
      title: "HERMES “Barenia”",
      url: "https://www.youtube.com/embed/Ewzvf3dkl4Q",
      director: "James Gray",
      dop: "Daniel Bouquet",
      prodco: "TwentyfourSeven"
    }
  ];

  return (
    <div style={ padding: '40px', fontFamily: 'sans-serif', position: 'relative' }>
      
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

      <h1 style={ fontSize: '32px' }>Commercials</h1>
      <div style={
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        alignItems: 'start'
      }>
        {videos.map((v, i) => (
          <div key={i} onClick={() => setLightbox(v.url)} style={ cursor: 'pointer' }>
            <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
              <iframe src={v.url} frameBorder="0"
                style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
                allowFullScreen></iframe>
            </div>
            <p style={ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }>
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
          <div style={ width: '80%', maxWidth: '960px' }>
            <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
              <iframe src={lightbox} frameBorder="0"
                style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

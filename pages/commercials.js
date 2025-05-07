
import { useState } from 'react';

export default function Commercials() {
  const [lightbox, setLightbox] = useState(null);
  const videos = [
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
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 20, left: 20, display: 'flex',
        justifyContent: 'center', gap: '40px', width: '100%', zIndex: 10
      }}>
        <a href="/commercials" style={navStyle}>Commercials</a>
        <a href="/feature" style={navStyle}>Feature</a>
        <a href="/" style={navStyle}>Home</a>
      </div>

      <h1 style={{ fontSize: '32px' }}>Commercials</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {videos.map((v, i) => (
          <div key={i} onClick={() => setLightbox(v.url)} style={{ cursor: 'pointer' }}>
            <div className="video-container">
              <iframe src={v.url} frameBorder="0" allowFullScreen></iframe>
            </div>
            <p><strong>{v.title}</strong><br />Director: {v.director}<br />DOP: {v.dop}<br />Prod Co: {v.prodco}</p>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="overlay" onClick={() => setLightbox(null)}>
          <div style={{ width: '80%', maxWidth: '960px' }}>
            <div className="video-container">
              <iframe src={lightbox} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const navStyle = {
  width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'black',
  color: 'white', fontWeight: 'bold', fontSize: '12px', display: 'flex',
  justifyContent: 'center', alignItems: 'center', textDecoration: 'none'
};

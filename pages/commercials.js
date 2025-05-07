
export default function Commercials() {
  return (
    <div style={ padding: '40px', fontFamily: 'sans-serif' }>
      <h1 style={ fontSize: '32px' }>Commercials</h1>
      <div style={
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        alignItems: 'start'
      }>
        
      <div>
        <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
          <iframe src="https://www.youtube.com/embed/4fKUnhAIVp0" frameBorder="0"
            style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
            allowFullScreen></iframe>
        </div>
        <p style={ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }>
          <strong>Disney “The last verse”</strong><br />
          Director: Henry Alex Rubin<br />
          DOP: Mathieu Plainfosse<br />
          Prod Co: Tickle Film
        </p>
      </div>
    
      <div>
        <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
          <iframe src="https://www.youtube.com/embed/2xdXKNQYN2o" frameBorder="0"
            style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
            allowFullScreen></iframe>
        </div>
        <p style={ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }>
          <strong>Nike Football “Awaken your madness”</strong><br />
          Director: Sam Pilling<br />
          DOP: Norm Li<br />
          Prod Co: TwentyfourSeven
        </p>
      </div>
    
      <div>
        <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
          <iframe src="https://player.vimeo.com/video/956438949" frameBorder="0"
            style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
            allowFullScreen></iframe>
        </div>
        <p style={ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }>
          <strong>Amazon Ads “Media Envy”</strong><br />
          Director: Sam Pilling<br />
          DOP: Daniel Voldheim<br />
          Prod Co: TwentyfourSeven
        </p>
      </div>
    
      <div>
        <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
          <iframe src="https://player.vimeo.com/video/1056187253" frameBorder="0"
            style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
            allowFullScreen></iframe>
        </div>
        <p style={ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }>
          <strong>PUMA “Year of Sport”</strong><br />
          Director: Ryan Chun<br />
          DOP: Joao de Botelho<br />
          Prod Co: Falca
        </p>
      </div>
    
      <div>
        <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
          <iframe src="https://www.youtube.com/embed/fQ9vubEsND4" frameBorder="0"
            style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
            allowFullScreen></iframe>
        </div>
        <p style={ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }>
          <strong>Youtube “What a time to be a sports fan”</strong><br />
          Director: Matias & Mathias<br />
          DOP: Mauro Chiarello<br />
          Prod Co: TwentyfourSeven
        </p>
      </div>
    
      <div>
        <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
          <iframe src="https://www.youtube.com/embed/Ewzvf3dkl4Q" frameBorder="0"
            style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
            allowFullScreen></iframe>
        </div>
        <p style={ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }>
          <strong>HERMES “Barenia”</strong><br />
          Director: James Gray<br />
          DOP: Daniel Bouquet<br />
          Prod Co: TwentyfourSeven
        </p>
      </div>
    
      </div>
    </div>
  );
}

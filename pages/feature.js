
export default function Feature() {
  return (
    <div style={ padding: '40px', fontFamily: 'sans-serif' }>
      <h1 style={ fontSize: '32px' }>Feature</h1>
      <div style={ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }>
        
        <div>
          <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
            <iframe src="https://www.youtube.com/embed/p1DH9-prniI" frameBorder="0"
              style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
              allowFullScreen></iframe>
          </div>
          <p style={ fontSize: '14px', lineHeight: '1.4', marginTop: '10px' }>
            <strong>Daryl Dixon Season 3</strong><br />
            Director: Dan Percival and Paco Cabezas<br />
            DOP: Tomasso Fiorilli and Pau Esteve<br />
            Prod Co: AMC
          </p>
        </div>
    
        <div>
          <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
            <iframe src="https://www.youtube.com/embed/cwYwGkhx7B0" frameBorder="0"
              style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
              allowFullScreen></iframe>
          </div>
          <p style={ fontSize: '14px', lineHeight: '1.4', marginTop: '10px' }>
            <strong>Desert Warrior</strong><br />
            Director: Rupert Wyatt<br />
            DOP: Guillermo Garza<br />
            Prod Co: MBC Studios
          </p>
        </div>
    
        <div>
          <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
            <iframe src="https://www.youtube.com/embed/l9tP4M8URhQ" frameBorder="0"
              style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
              allowFullScreen></iframe>
          </div>
          <p style={ fontSize: '14px', lineHeight: '1.4', marginTop: '10px' }>
            <strong>La sociedad de la nieve</strong><br />
            Director: J.A. Bayona<br />
            DOP: Pedro Duque<br />
            Prod Co: NETFLIX
          </p>
        </div>
    
        <div>
          <div style={ position: 'relative', paddingBottom: '56.25%', height: 0 }>
            <iframe src="https://www.youtube.com/embed/doXX0vja4qs" frameBorder="0"
              style={ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }
              allowFullScreen></iframe>
          </div>
          <p style={ fontSize: '14px', lineHeight: '1.4', marginTop: '10px' }>
            <strong>By ana Milan trailer</strong><br />
            Director: Rómulo Aguillaume<br />
            DOP: Iván Caso<br />
            Prod Co: Buendia Estudios
          </p>
        </div>
    
      </div>
    </div>
  );
}


export default function Feature() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '32px' }}>Feature</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start' }}>
        <div>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe src="https://www.youtube.com/embed/p1DH9-prniI" frameBorder="0"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              allowFullScreen></iframe>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.3', marginTop: '6px' }}>
            <strong>Daryl Dixon Season 3</strong><br />
            Director: Dan Percival and Paco Cabezas<br />
            DOP: Tomasso Fiorilli and Pau Esteve<br />
            Prod Co: AMC
          </p>
        </div>
      </div>
    </div>
  );
}

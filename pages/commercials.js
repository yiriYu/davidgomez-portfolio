
export default function Commercials() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '32px' }}>Commercials</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe src="https://www.youtube.com/embed/4fKUnhAIVp0" frameBorder="0"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              allowFullScreen></iframe>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.4', marginTop: '10px' }}>
            <strong>Disney “The last verse”</strong><br />
            Director: Henry Alex Rubin<br />
            DOP: Mathieu Plainfosse<br />
            Prod Co: Tickle Film
          </p>
        </div>
      </div>
    </div>
  );
}

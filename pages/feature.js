
export default function Feature() {
  return (
    <div style={{ padding: '60px 20px 20px 20px', background: 'white' }}>
      <div style={{ position: 'fixed', top: '10px', left: '10px', display: 'flex', gap: '10px' }}>
        <a href="/" style={{
          width: '60px', height: '60px', borderRadius: '30px',
          background: 'black', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '10px'
        }}>HOME</a>
        <a href="/feature" style={{
          width: '60px', height: '60px', borderRadius: '30px',
          background: 'black', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '10px'
        }}>FEATURE</a>
        <a href="/commercials" style={{
          width: '60px', height: '60px', borderRadius: '30px',
          background: 'black', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '10px'
        }}>COMMERCIALS</a>
      </div>
      <h1>FEATURE</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '60px' }}>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/p1DH9-prniI" frameBorder="0" allowFullScreen></iframe>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/cwYwGkhx7B0" frameBorder="0" allowFullScreen></iframe>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/l9tP4M8URhQ" frameBorder="0" allowFullScreen></iframe>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/doXX0vja4qs" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )
}

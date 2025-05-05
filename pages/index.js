
export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', background: 'white' }}>
      <a href="/feature" style={{
        position: 'absolute', top: '20%', left: '20%',
        width: '140px', height: '140px', borderRadius: '50%',
        background: 'black', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 'bold'
      }}>FEATURE</a>
      <a href="/commercials" style={{
        position: 'absolute', top: '20%', right: '20%',
        width: '140px', height: '140px', borderRadius: '50%',
        background: 'black', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 'bold'
      }}>COMMERCIALS</a>
      <a href="#" style={{
        position: 'absolute', bottom: '10%', left: '50%',
        transform: 'translateX(-50%)',
        width: '140px', height: '140px', borderRadius: '50%',
        background: 'black', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 'bold'
      }}>ABOUT</a>
      <img src="/assets/logo.png" style={{
        position: 'absolute', left: '50%', top: '47%',
        transform: 'translate(-50%, -50%)',
        width: '180px'
      }} />
    </div>
  )
}

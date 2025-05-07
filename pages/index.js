
export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: 'white'
    }}>
      <img src="/logo.png" alt="Logo" style={{
        position: 'absolute',
        width: '120px',
        top: 'calc(50% - 60px)',
        left: 'calc(50% - 60px)',
        zIndex: 2
      }} />
      <a href="/commercials" style={{
        position: 'absolute',
        top: '30%',
        left: '30%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textDecoration: 'none'
      }}>Commercials</a>
      <a href="/feature" style={{
        position: 'absolute',
        top: '30%',
        right: '30%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textDecoration: 'none'
      }}>Feature</a>
      <a href="/about" style={{
        position: 'absolute',
        bottom: '20%',
        left: 'calc(50% - 50px)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textDecoration: 'none'
      }}>About</a>
    </div>
  );
}

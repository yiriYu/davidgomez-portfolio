
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
        width: '144px',
        top: 'calc(50% - 72px)',
        left: 'calc(50% - 72px)',
        zIndex: 2
      }} />
      <a href="/commercials" style={{
        position: 'absolute',
        top: '32%',
        left: '32%',
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
        top: '32%',
        right: '32%',
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
        bottom: '25%',
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

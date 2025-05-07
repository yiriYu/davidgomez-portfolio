
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
        top: 'calc(50% - 110px)',
        left: 'calc(50% - 150px)',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        textDecoration: 'none',
        zIndex: 1
      }}>Commercials</a>
      <a href="/feature" style={{
        position: 'absolute',
        top: 'calc(50% - 110px)',
        left: 'calc(50% + 60px)',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        textDecoration: 'none',
        zIndex: 1
      }}>Feature</a>
      <a href="/about" style={{
        position: 'absolute',
        top: 'calc(50% + 90px)',
        left: 'calc(50% - 45px)',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        textDecoration: 'none',
        zIndex: 1
      }}>About</a>
    </div>
  );
}

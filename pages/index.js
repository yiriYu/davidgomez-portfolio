
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'relative', width: '300px', height: '260px' }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: '180px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }}
        />
        <Link href="/commercials">
          <div style={circleStyle({ top: 0, left: 0 })}>Commercials</div>
        </Link>
        <Link href="/feature">
          <div style={circleStyle({ top: 0, right: 0 })}>Feature</div>
        </Link>
        <Link href="/about">
          <div style={circleStyle({ bottom: 0, left: '50%', transform: 'translateX(-50%)' })}>About</div>
        </Link>
      </div>
    </div>
  );
}

function circleStyle(positioning) {
  return {
    position: 'absolute',
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    ...positioning
  };
}

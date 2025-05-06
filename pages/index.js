
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ background: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '300px', height: '260px' }}>
        <Link href="/commercials"><a style={{ position: 'absolute', top: 0, left: 0 }}>Commercials</a></Link>
        <Link href="/feature"><a style={{ position: 'absolute', top: 0, right: 0 }}>Feature</a></Link>
        <Link href="/about"><a style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>About</a></Link>
        <img src="/logo.png" style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px' }} />
      </div>
    </div>
  )
}

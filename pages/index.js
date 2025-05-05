import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <img src="/logo.png" alt="Logo" style={{ width: '200px', marginBottom: '40px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <Link href="/feature"><div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Feature</div></Link>
        <Link href="/commercials"><div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Commercials</div></Link>
        <Link href="/about"><div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>About</div></Link>
      </div>
    </div>
  )
}

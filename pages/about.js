
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About | David Gomez Ojeda</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        
<style>{`
  body {
    background: white;
    color: black;
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px 40px;
    background: white;
    border-bottom: none;
  }
  .nav .logo {
    position: absolute;
    left: 20px;
    top: 20px;
  }
  .nav .logo img {
    height: 40px;
  }
  .nav-links {
    display: flex;
    gap: 30px;
    font-size: 20px; line-height: 1.1;
  }
  .nav a {
    color: black;
    text-decoration: none;
  }
`}</style>

      </Head>
      
<nav className="nav">
  <div className="logo">
    <img src="/logo.png" alt="Logo" />
  </div>
  <div className="nav-links">
    <Link href="/commercials">Commercials</Link>
    <Link href="/feature">Feature</Link>
    <Link href="/about">About</Link>
  </div>
</nav>


      <div className="section" style={{ padding: "140px 40px 40px 40px" }}>
        <h2>About</h2>
        <p>
          David Gomez Ojeda is a freelance Digital Imaging Technician working in feature films and high-end commercials.
          With deep technical knowledge and a sharp eye, he ensures image integrity from set to post.
        </p>
        <p>
          Contact: <a href="mailto:davidgomezdit1980@gmail.com" style={{ color: "#ff4444" }}>davidgomezdit1980@gmail.com</a>
        </p>
      </div>
    </>
  )
}

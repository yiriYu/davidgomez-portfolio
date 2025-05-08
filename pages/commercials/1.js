
export default function CommercialsPage1() {
  const videos = [
    { title: "Disney - The Last Verse", url: "https://www.youtube.com/embed/4fKUnhAIVp0" },
    { title: "YouTube - Sports Fan", url: "https://www.youtube.com/embed/fQ9vubEsND4" },
    { title: "Nike Football", url: "https://www.youtube.com/embed/2xdXKNQYN2o" }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Commercials – Page 1</h1>
      {videos.map((v, i) => (
        <div key={i} style={{ marginBottom: '40px' }}>
          <h2>{v.title}</h2>
          <iframe width="560" height="315" src={v.url} frameBorder="0" allowFullScreen></iframe>
        </div>
      ))}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="/commercials/2" style={{ fontSize: '24px' }}>→ Página siguiente</a>
      </div>
    </div>
  );
}

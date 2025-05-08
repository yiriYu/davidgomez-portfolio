
export default function Feature() {
  const videos = [
    { title: "Daryl Dixon Season 3", url: "https://www.youtube.com/embed/p1DH9-prniI" },
    { title: "Desert Warrior", url: "https://www.youtube.com/embed/cwYwGkhx7B0" }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Feature</h1>
      {videos.map((v, i) => (
        <div key={i} style={{ marginBottom: '40px' }}>
          <h2>{v.title}</h2>
          <iframe width="560" height="315" src={v.url} frameBorder="0" allowFullScreen></iframe>
        </div>
      ))}
    </div>
  );
}

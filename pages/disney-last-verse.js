
import Layout from './layout';

export default function Video() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/4fKUnhAIVp0"
            title="Disney The Last Verse"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-sm space-y-2">
          <p><strong>MÓ</strong></p>
          <p>Agency: Sra. Rushmore</p>
          <p>Production Co: CANADA</p>
          <p>Directed by: MANSON</p>
          <p>Cinematography by: DAVID GOMEZ OJEDA</p>
          <p>Shot on: Alexa & Kowa Anamorphics</p>
        </div>
      </div>
    </Layout>
  );
}

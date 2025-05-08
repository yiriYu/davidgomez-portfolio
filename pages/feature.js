
import Layout from './layout';

const videos = [
  {
    title: 'Daryl Dixon Season 3',
    url: 'https://www.youtube.com/embed/p1DH9-prniI',
    credits: 'Director: Dan Percival and Paco Cabezas | DOP: Tomasso Fiorilli and Pau Esteve | AMC'
  },
  {
    title: 'Desert Warrior',
    url: 'https://www.youtube.com/embed/cwYwGkhx7B0',
    credits: 'Director: Rupert Wyatt | DOP: Guillermo Garza | MBC Studios'
  },
  {
    title: 'La sociedad de la nieve',
    url: 'https://www.youtube.com/embed/l9tP4M8URhQ',
    credits: 'Director: J.A. Bayona | DOP: Pedro Duque | NETFLIX'
  },
  {
    title: 'By ana Milan trailer',
    url: 'https://www.youtube.com/embed/doXX0vja4qs',
    credits: 'Director: Rómulo Aguillaume | DOP: Iván Caso | Buendia Estudios'
  }
];

export default function Feature() {
  return (
    <Layout>
      <div className="space-y-12">
        {videos.map((video, index) => (
          <div key={index}>
            <div className="aspect-video mb-2">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="text-sm text-gray-600">{video.credits}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

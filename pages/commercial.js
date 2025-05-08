
import Layout from './layout';

const videos = [
  {
    title: 'Disney “The last verse”',
    url: 'https://www.youtube.com/embed/4fKUnhAIVp0',
    credits: 'Director: Henry Alex Rubin | DOP: Mathieu Plainfosse | Prod Co: Tickle Film'
  },
  {
    title: 'Youtube “What a time to be a sports fan”',
    url: 'https://www.youtube.com/embed/fQ9vubEsND4',
    credits: 'Director: Matias & Mathias | DOP: Mauro Chiarello | Prod Co: TwentyfourSeven'
  },
  {
    title: 'Nike Football “Awaken your madness”',
    url: 'https://www.youtube.com/embed/2xdXKNQYN2o',
    credits: 'Director: Sam Pilling | DOP: Norm Li | Prod Co: TwentyfourSeven'
  },
  {
    title: 'Amazon Ads “Media Envy”',
    url: 'https://player.vimeo.com/video/956438949',
    credits: 'Director: Sam Pilling | DOP: Daniel Voldheim | Prod Co: TwentyfourSeven'
  }
];

export default function Commercial() {
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

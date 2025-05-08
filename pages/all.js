
import Layout from './layout';

const featured = [
  'https://img.youtube.com/vi/4fKUnhAIVp0/maxresdefault.jpg',
  'https://img.youtube.com/vi/fQ9vubEsND4/maxresdefault.jpg',
  'https://img.youtube.com/vi/2xdXKNQYN2o/maxresdefault.jpg'
];

const videos = [
  {
    slug: 'disney-last-verse',
    thumb: 'https://img.youtube.com/vi/4fKUnhAIVp0/mqdefault.jpg',
    title: 'Disney “The last verse”'
  },
  {
    slug: 'youtube-sports-fan',
    thumb: 'https://img.youtube.com/vi/fQ9vubEsND4/mqdefault.jpg',
    title: 'Youtube “What a time to be a sports fan”'
  },
  {
    slug: 'nike-awaken-madness',
    thumb: 'https://img.youtube.com/vi/2xdXKNQYN2o/mqdefault.jpg',
    title: 'Nike Football “Awaken your madness”'
  }
];

export default function All() {
  return (
    <Layout>
      <div className="w-full aspect-video mb-8">
        <img src={featured[0]} alt="Featured" className="w-full h-full object-cover" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video, idx) => (
          <a href={`/${video.slug}`} key={idx} className="block">
            <img src={video.thumb} alt={video.title} className="w-full object-cover" />
          </a>
        ))}
      </div>
    </Layout>
  );
}

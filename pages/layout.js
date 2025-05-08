
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="w-full border-b bg-white z-50">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <div className="text-xl font-semibold tracking-widest">David Gomez Ojeda</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">Digital Imaging Technician</div>
          <div className="mt-4 space-x-6 text-sm">
            <Link href="/all"><span className="hover:underline">All</span></Link>
            <Link href="/commercial"><span className="hover:underline">Commercial</span></Link>
            <Link href="/feature"><span className="hover:underline">Feature</span></Link>
            <Link href="/about"><span className="hover:underline">About</span></Link>
          </div>
        </div>
      </nav>
      <main className="pt-6 px-6 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}

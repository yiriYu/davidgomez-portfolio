
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 left-0 w-full border-b bg-white z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between">
          <div className="font-bold">David Gomez</div>
          <div className="space-x-4">
            <Link href="/commercial"><span className="hover:underline">Commercial</span></Link>
            <Link href="/feature"><span className="hover:underline">Feature</span></Link>
            <Link href="/about"><span className="hover:underline">About</span></Link>
          </div>
        </div>
      </nav>
      <main className="pt-20 px-4 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  );
}

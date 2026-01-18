import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight to-steel">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-bold text-pearl mb-4">Page Not Found</h2>
        <p className="text-slate mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
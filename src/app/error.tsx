'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight to-steel">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gold mb-4">Oops!</h1>
        <h2 className="text-xl font-bold text-pearl mb-4">Something went wrong</h2>
        <p className="text-slate mb-8">We're working on fixing this issue.</p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
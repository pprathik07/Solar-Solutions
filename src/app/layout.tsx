import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vajra Renew | Solar Energy Solutions',
  description: 'Trusted solar installation partner in Telangana with 6+ years experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

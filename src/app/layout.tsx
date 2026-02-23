import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Izrael's Decent Portfolio",
  description: 'Professional portfolio showcasing projects, skills, and background.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

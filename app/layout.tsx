import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cake Maid SA | Premium Custom Confectionery',
  description:
    'Premium custom cakes, celebration desserts and pastry delights from Cake Maid SA in Pretoria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

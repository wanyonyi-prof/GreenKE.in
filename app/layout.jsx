import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Green Kenya Initiative',
  description: 'Empowering Youth for a Greener Future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification Meta Tag */}
        <meta name="google-site-verification" content="ZS1HkQ-B0Ca0s9-TtetOFATySy8l2l0hX9V345bvHbU" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
import Layout from '@/components/layout';
import '../styles/globals.css';  // Correct path to your CSS file

export const metadata = {
  title: 'Green Kenya Initiative',
  description: 'Empowering Youth for a Greener Future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
import { monserrat } from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        <p>Esto es parte del layout principal</p>
        {children}
        <footer className='py-10 flex justify-center items-center'>Pie de página </footer>
      </body>
    </html>
  );
}

import './globals.css';
import './icon-fixes.css';

export const metadata = {
  title: 'Outlet Live — Shop the stream',
  description: 'Live outlet shopping experience',
};

export default function RootLayout({ children }) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}

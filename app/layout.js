import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ScrollToTopButton from "./component/ScrollToTopButton";
import "./globals.css";
import { Ephesis, Sono } from 'next/font/google';

const ephesis = Ephesis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ephesis',
});

const sono = Sono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ephesis.variable} ${sono.variable}`}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}

import WebApp from '@twa-dev/sdk'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CatsGang Black",
  description: "Airdrop catsgang web app telegram",
};

WebApp.ready()
WebApp.enableClosingConfirmation()
WebApp.setHeaderColor('#1a1a1a')

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}

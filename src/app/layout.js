import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CineVie",
};



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="">
            <Navbar />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  );
}

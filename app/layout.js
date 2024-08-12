import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SessionWrapper from "./Components/SessionWrapper";
import Reload from "./Components/Reload";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Need Money - Helps from your friend",
  description: "Welcome to Need Money app provide a platform where your friends and followers helps you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white font-sans scrollbar-rounded'>
        <SessionWrapper>
          <Navbar />
          <div className="sm:min-h-screen min-h-[90vh]">
            <Reload />
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}

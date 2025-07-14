// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Poppins} from "next/font/google";
import ResponsiveNav from "./Components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"]
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Travel website",
  description: "Travel Web UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav/>
        {children} 
      </body>
    </html>
  );
}

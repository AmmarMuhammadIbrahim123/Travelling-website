import "./globals.css";
import {Poppins} from "next/font/google";
import ResponsiveNav from "./Components/Home/Navbar/ResponsiveNav";
import Footer from "./Components/Home/Footer/Footer";

const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"]
})



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
        <Footer/>
      </body>
    </html>
  );
}

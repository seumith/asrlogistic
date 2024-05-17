import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/homepage/navbar";
import NextTopLoader from 'nextjs-toploader';
const poppins = Poppins({ subsets: ["latin"],weight : ["100","200","300","400","600","700"]});

export const metadata = {
  title: "ASR Logistic Packers",
  description: "Moving Company in Delhi | Packing & Transportation Services. ASR Logistics Packers and Movers is a trusted moving company in Delhi, offering packing, moving, loading, unloading, and car transportation services throughout India. We ensure the safety of your belongings with experienced professionals and high-quality packing materials. Get a free quote today!",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full sm:w-[80%] relative`}>
        <NextTopLoader color="linear-gradient(90deg,rgb(94, 94, 255),rgb(255, 192, 203),rgb(153, 0, 255))" showSpinner={false}/>
        <Navbar/>
        <div className="blob1 fixed -top-4 -left-5"></div>
        <div className="blob2 fixed "></div>
        <div className="blob3 fixed "></div>
        {children}</body>
    </html>
  );
}

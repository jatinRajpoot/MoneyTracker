import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Button from "@/components/Plusbutton/button";
import SessionWrapper from "@/components/sessionwrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoneyTracker",
  description: "Money tracker aap",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <SessionWrapper>
      <body className={inter.className}>
        
      {/* <Navbar></Navbar>
      <Button></Button> */}
        {children}
        </body>
        </SessionWrapper>
    </html>
 
    </>
    
  );
}

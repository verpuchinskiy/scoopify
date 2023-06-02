import "./globals.scss";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProductsCtxProvider } from "./components/ProductsCtxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scoopify",
  description: "Experience the joy of handmade ice cream!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="rootContainer">
          <ProductsCtxProvider>
            <Navbar />
            <div className="contentContainer">{children}</div>
            <Footer />
          </ProductsCtxProvider>
        </div>
      </body>
    </html>
  );
}

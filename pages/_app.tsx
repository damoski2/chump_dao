import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "../components/imports";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer, SwitchNetworkModal } from "../components/imports";
import { BlockChainProvider } from "../context/BlockChainContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlockChainProvider>
      <>
        <Header />
        <Component {...pageProps} />
        <SwitchNetworkModal />
        <Footer />
      </>
    </BlockChainProvider>
  );
}

export default MyApp;

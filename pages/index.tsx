import { useEffect, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Carousel, Community, TimeLine, Loader } from "../components/imports";
import { fetchCryptoAssets } from "../api/crypto";
import { BlockChainContext } from "../context/BlockChainContext";

const Home: NextPage = () => {
  const { loading } = useContext(BlockChainContext);

  useEffect(() => {}, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ zIndex: 50, overflowY: "hidden" }}>
      <Head>
        <title>ChumpDAO - Garnerly DAO for community consensus. </title>
        <meta
          name="title"
          content="ChumpDAO - Garnerly DAO for community consensus."
        />
        <meta
          name="description"
          content="A Fair DAO for voting on equality on garnerly’s internal decisions using timeLine for decentralized governance 🤝"
        />
        <meta
          name="keywords"
          content="Blockchain, DAO, DEX, Community, Web3.0, Crypto, Networking tools, Garner, DAO's, Governance"
        />

        <meta name="author" content="ChumpDAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content="https://chumpdao.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="ChumpDAO - Garnerly DAO for community consensus."
        />
        <meta
          property="og:description"
          content="A Fair DAO for voting on equality on garnerly’s internal decisions using timeLine for decentralized governance 🤝"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/oyindacodes/image/upload/v1657996562/MOckup_bldjwk.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://chumpdao.vercel.app/"
        />
        <meta property="twitter:url" content="https://chumpdao.vercel.app/" />
        <meta
          name="twitter:title"
          content="ChumpDAO - Garnerly DAO for community consensus."
        />
        <meta
          name="twitter:description"
          content="A Fair DAO for voting on equality on garnerly’s internal decisions using timeLine for decentralized governance 🤝"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/oyindacodes/image/upload/v1657996562/MOckup_bldjwk.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Community />
      <TimeLine />
    </div>
  );
};

export default Home;

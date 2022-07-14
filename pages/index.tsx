import { useEffect, useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Carousel, Community, TimeLine, Loader } from '../components/imports'
import { fetchCryptoAssets } from '../api/crypto'
import { BlockChainContext } from '../context/BlockChainContext'


const Home: NextPage = () => {

  const { loading } = useContext(BlockChainContext)

  useEffect(() =>{
   
  },[])

  if(loading){
    return <Loader />
  }

  return (
    <div style={{ zIndex:50, overflowY: 'hidden' }} >
      <Head>
        <title>Chump Dao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Community />
      <TimeLine />
    </div>
  )
}

export default Home

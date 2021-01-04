import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';

import Navbar from '../components/navbar';
import HomePageMain from '../components/home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Probox</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>

      <div className={styles.container}>
        <Navbar title="Probox"/>
        <HomePageMain/>
      </div>
    </div>
  );
}

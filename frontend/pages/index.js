import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';

import Navbar from '../components/navbar';
import Home from  '../components/home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Probox</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <Navbar title="Probox" text="LOGIN"/>

      <Home/>
    </div>
  );
}

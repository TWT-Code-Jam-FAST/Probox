import '../styles/globals.css';
import React from 'react';
import 'fontsource-roboto';
import Head from "next/head";
import Navbar from "../components/navbar";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Probox</title>
        <link rel="icon" href="/favicon.ico"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <Navbar title="Probox"/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

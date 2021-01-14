import '../styles/globals.css';
import '../styles/boostrap.css';
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
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js"/>
      </Head>

      <Navbar title="Probox"/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

import NavBar from './components/NavBar';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from './components/Footer';

export default function Home() {




  return (
    <main className={styles.main}>

      <Head>
        {/* X-icon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" sizes="any" type="image/png" />
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.png" />


        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="PXD , pxd , Programmer , developer , designer , web developer, Naman, Saini, NamanSaini, Naman Saini, ProgrammerXD, programmerxd, Programmer XD, software engineer , engineer , freelancer" />
        <meta name="author" content="ProgrammerXD / Naman Saini" />
        <meta name="title" content="Naman Saini: Revolutionizing Programming with PXD" />
        <meta name="description" content="Discover how Naman Saini's ProgrammerXD is shaping the future of coding and development." />
        <meta property="og:image" content="./assets/img/logo.png" />
        <meta property="og:title" content="Naman Saini: Revolutionizing Programming with PXD" />
        <meta property="og:url" content="https://realpxd.github.io/ProgrammerXD" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Discover how Naman Saini's ProgrammerXD is shaping the future of coding and development." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="https://realpxd.github.io/ProgrammerXD" />
        <meta name="twitter:title" content="Naman Saini: Revolutionizing Programming with PXD" />
        <meta name="twitter:description" content="Discover how Naman Saini's ProgrammerXD is shaping the future of coding and development." />
        <meta name="twitter:url" content="https://realpxd.github.io/ProgrammerXD" />
        <meta name="twitter:image" content="./assets/img/logo.png" />
        <meta id="themeH" name="theme-color" content="#000" />
        <meta name="revised" content="ProgrammerXD, 24/10/2023" />
      </Head>
      <NavBar />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </main>
  )
}

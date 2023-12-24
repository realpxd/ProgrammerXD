"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

import NavBar from './components/NavBar';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from './components/Footer';
import { Router } from 'next/router';



export default function Home() {




  return (
    <main className={styles.main}>

      <Head>
      </Head>
      <NavBar />
      <SectionA />
      <hr className={styles.hr} />
      <SectionB />
      <hr className={styles.hr} />
      <SectionC />
      <hr className={styles.hr} />
      <Footer />

    </main>
  )
}

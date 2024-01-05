"use client";
import Image from 'next/image'
import styles from './page.module.css'

import NavBar from './components/NavBar';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from './components/Footer';
import { Router } from 'next/router';



export default function Home() {

  // const test = async () => {
  //   let res = await fetch('http://localhost:3000/api/api_four');
  //   let data = await res.json();
  //   console.log(data);

  // }
  // test();


  return (
    <main className={styles.main}>
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

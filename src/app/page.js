"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';



export default function Home() {
  const router = useRouter();

  useEffect(() => {
      router.push('/home');
  });

  return (
    <main className={styles.main}>

    </main>
  )
}

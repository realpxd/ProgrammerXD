"use client"
import { useRouter, usePathname } from 'next/navigation';
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools'


import HomePage from './components/home/Home';
import NavBar from './components/NavBar';
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react';


export default function Home() {

  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}

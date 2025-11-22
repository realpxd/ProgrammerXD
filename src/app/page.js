"use client"
import { useRouter, usePathname } from 'next/navigation';
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools'


import HomePage from './components/home/Home';
import NavBar from './components/NavBar';
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1); // Remove the # symbol
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 80; // Account for fixed navbar
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Run after a short delay to ensure DOM is ready
    handleHashNavigation();
  }, []);

  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}

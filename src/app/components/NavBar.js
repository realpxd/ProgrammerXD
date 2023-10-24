import React, { useEffect } from 'react';
import styles from '../page.module.css';
import Image from 'next/image';

const NavBar = () => {
  // Initialize the state to track whether the navbar should have the 'navBarScrolled' class
  const [scrolled, setScrolled] = React.useState(false);

  function handleScroll() {
    // Get the current scroll position
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is greater than 100px
    if (currentPosition > 100) {
      // If it's greater than 100px, set the 'scrolled' state to true
      setScrolled(true);
    } else {
      // If it's less than or equal to 100px, set the 'scrolled' state to false
      setScrolled(false);
    }
  }

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine the CSS classes based on the 'scrolled' state
  const navBarClasses = `${styles.navBar} ${scrolled ? styles.navBarScrolled : ''}`;

  return (
    <div className={navBarClasses}>
      <Image src={'/pxd.png'} width={120} height={60} alt='LOGO' />
      <p className={styles.hamburger}>&#9776;</p>
      <div>
        <a href="#">
          <p>Home</p>
        </a>

        <a href="#">
          <p>About</p>
        </a>

        <a href="#">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;

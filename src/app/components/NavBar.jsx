"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const navRef = useRef(null);
  const lastScroll = useRef(0);

  /* ------------------------------
      Scroll hide/show logic
  ------------------------------ */
  const handleScroll = useCallback(() => {
    const current = window.scrollY;

    setScrolled(current > 50);

    if (current > lastScroll.current && current > 150) {
      setHidden(true); // scrolling down → hide
    } else {
      setHidden(false); // scrolling up → show
    }

    lastScroll.current = current;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  /* ------------------------------
      Close menu on outside click
  ------------------------------ */
  useEffect(() => {
    const close = (e) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", close);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", close);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* ------------------------------
      Scroll to section
  ------------------------------ */
  const handleLinkClick = useCallback((e, href) => {
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      
      // If we're on a different page (like /projects), navigate to home first
      if (pathname !== "/") {
        // Navigate to home page with hash
        window.location.href = `/#${id}`;
        return;
      }

      // If we're already on home page, scroll to section
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        // If element not found, try navigating with hash
        window.location.href = `/#${id}`;
      }
    }
  }, [pathname]);

  /* ------------------------------
      Nav links
  ------------------------------ */
  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/#education", label: "Education" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = useCallback(
    (href) => {
      if (href === "/projects") return pathname.startsWith("/projects");
      return pathname === "/" && href === "/#home";
    },
    [pathname]
  );

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
          <Image src="/pxd.png" width={120} height={60} alt="ProgrammerXD Logo" />
        </Link>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <div ref={navRef} className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

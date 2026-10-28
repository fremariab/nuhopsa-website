"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollProgress from "@/components/ui/ScrollProgress";

const navLinks = [
  { label: "Home",             href: "/" },
  { label: "About",            href: "/about" },
  { label: "80th Anniversary", href: "/anniversary" },
  { label: "Event Calendar",   href: "/events" },
  { label: "News",             href: "/news" },
  { label: "Gallery",          href: "/gallery" },
  { label: "Get Involved",     href: "/get-involved" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateScrollState = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`navbar-root ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
      >
        <div className="section-container navbar-inner">

          {/* Logo */}
          <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            {/* Swap src once logo is ready */}
            {/* <Image src="/images/logo.png" alt="NUHOPSA" width={140} height={40} /> */}
            <span className="navbar-logo-text">NUHOPSA</span>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar-links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link link-draw ${pathname === link.href ? "navbar-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/donate" className="navbar-donate">
              Donate
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`ham-bar ${menuOpen ? "ham-bar-top-open" : ""}`} />
            <span className={`ham-bar ${menuOpen ? "ham-bar-mid-open" : ""}`} />
            <span className={`ham-bar ${menuOpen ? "ham-bar-bot-open" : ""}`} />
          </button>

        </div>
        <ScrollProgress />
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link link-draw ${pathname === link.href ? "mobile-link-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="mobile-donate"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
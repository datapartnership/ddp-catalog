import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";
import { getAssetPath } from "../utils/paths";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="site-header">
  <Link href="/" className="site-header-logo">
  <img src={getAssetPath("/ddp_img/logo-horizontal-white.png")} alt="Development Data Partnership" width="220" height="40" style={{ width: "220px", height: "auto", minHeight: "32px", display: "inline-block" }} />
  <span className="site-header-divider"></span>
  <h1 className="site-header-title" style={{ fontFamily: "'Asap Condensed', sans-serif" }}>Open Source</h1>
      </Link>
  <div className="site-header-nav site-header-nav-desktop">
  <Link href="/catalog" className="site-header-link">CODE CATALOG</Link>
  <a href="https://github.com/worldbank" target="_blank" rel="noopener noreferrer" className="site-header-link">WB GITHUB</a>
  <a href="mailto:github@worldbank.org" className="site-header-link">CONTACT US</a>
      </div>
      <button
  className="site-header-hamburger"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "1.2rem",
          cursor: "pointer"
        }}
      >
        &#9776;
      </button>
      {menuOpen && (
  <div className="site-header-menu">
          <Link href="/catalog" className="site-header-link">CODE CATALOG</Link>
          <a href="https://github.com/worldbank" className="site-header-link">WB GITHUB</a>
          <a href="mailto:github@worldbank.org" className="site-header-link">CONTACT US</a>
        </div>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import ComparisonMenu from "./ComparisonMenu";

export default function InternalChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="internal-shell">
      <div className="announcement">AI-powered WhatsApp CRM for ambitious teams <Link href="/#demo">Book a demo <span>→</span></Link></div>
      <header className="site-header internal-header">
        <Link className="logo official-logo" href="/" aria-label="WhatsEase home"><Image src="/logo.svg" alt="WhatsEase" width={154} height={32} priority /></Link>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <Link href="/product">Product</Link>
          <Link href="/use-case">Use Case</Link>
          <ComparisonMenu />
          <Link href="/pricing">Pricing</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/about">About us</Link>
        </nav>
        <div className="nav-actions"><a href="https://whatsease.in" className="login">Log in</a><Link className="button button-small" href="/#demo">Book a demo</Link></div>
      </header>
      {children}
      <footer className="footer internal-footer">
        <div className="footer-main">
          <div className="footer-brand"><Link className="logo inverse official-logo" href="/"><Image src="/logo.svg" alt="WhatsEase" width={154} height={32} /></Link><p>AI-powered conversations that help ambitious teams sell, support and grow on WhatsApp.</p><div className="footer-contact"><a href="mailto:connect.whatsease@gmail.com">connect.whatsease@gmail.com</a><span>Vadodara, Gujarat, India</span></div></div>
          <div><h3>Product</h3><Link href="/product">Overview</Link><Link href="/product">Features</Link><Link href="/pricing">Pricing</Link><Link href="/use-case">Solutions</Link></div>
          <div><h3>Solutions</h3><Link href="/use-case">Sales</Link><Link href="/use-case/customer-support">Support</Link><Link href="/use-case/whatsapp-marketing-campaigns">Marketing</Link><Link href="/case-studies">Industries</Link></div>
          <div><h3>Company</h3><Link href="/case-studies">Customers</Link><Link href="/about">About</Link><Link href="/#demo">Contact</Link><Link href="/case-studies">Case studies</Link></div>
          <div><h3>Resources</h3><a href="https://www.whatsease.in/docs">Documentation</a><a href="https://www.whatsease.in/contact">Help centre</a><a href="https://www.whatsease.in/privacy">Privacy</a><a href="https://www.whatsease.in/terms">Terms</a></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 WhatsEase Technologies</span><span className="footer-made-in-india">Made with love in India <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="18" height="12"><rect width="3" height="0.667" fill="#FF9933"/><rect y="0.667" width="3" height="0.667" fill="#FFFFFF"/><rect y="1.333" width="3" height="0.667" fill="#138808"/><circle cx="1.5" cy="1" r="0.25" fill="#000080"/></svg></span></div>
      </footer>
    </div>
  );
}

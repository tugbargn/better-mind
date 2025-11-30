import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          <strong>Uzm. Klinik Psikolog Kadriye Yılmaz</strong> – Bireysel
          psikoterapi ve online danışmanlık hizmetleri.
        </p>
        <p className="footer-copy">
          © {year} klinikpsikologkadriyeyilmaz.com · Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

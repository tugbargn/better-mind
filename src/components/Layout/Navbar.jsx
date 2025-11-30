import React from "react";
import { NavLink, Link } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  isActive ? "navbar-link navbar-link-active" : "navbar-link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          Uzm. Klinik Psikolog Kadriye Yılmaz
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" end className={navLinkClass}>
            Ana Sayfa
          </NavLink>
          <NavLink to="/hakkimda" className={navLinkClass}>
            Hakkımda
          </NavLink>
          <NavLink to="/hizmetler" className={navLinkClass}>
            Hizmetler
          </NavLink>
          <NavLink to="/yazilar" className={navLinkClass}>
            Yazılar
          </NavLink>
          <NavLink to="/randevu" className={navLinkClass}>
            Randevu
          </NavLink>
          <NavLink to="/iletisim" className={navLinkClass}>
            İletişim
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

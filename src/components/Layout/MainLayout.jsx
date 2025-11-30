import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="page-container">{children}</main>
      <Footer />
    </div>
  );
}
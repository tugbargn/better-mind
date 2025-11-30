import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/yazilar" element={<Blog />} />
        <Route path="/randevu" element={<Appointment />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

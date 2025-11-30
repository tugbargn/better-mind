import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Uzm. Klinik Psikolog Kadriye Yılmaz</h1>
      <p>
        Güvenli, yargısız ve destekleyici bir terapi ortamında; duygusal
        zorluklarınızı, ilişkisel problemlerinizin kökenlerini ve hayatınızda
        tekrar eden döngüleri birlikte anlamlandırıyoruz.
      </p>

      <div className="btn-row">
        <Link to="/randevu" className="btn-primary">
          Randevu Al
        </Link>
        <Link to="/hakkimda" className="btn-secondary">
          Hakkımda
        </Link>
      </div>

      {/* diğer section'lar aynı kalabilir */}
    </section>
  );
}
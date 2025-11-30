import React from "react";

export default function AppointmentPage() {
  return (
    <section>
      <h1>Randevu</h1>
      <p style={{ marginTop: "1rem" }}>
        Online veya yüz yüze görüşme planlamak için aşağıdaki takvim aracını kullanabilir ya da
        İletişim sayfasındaki form üzerinden randevu talebinde bulunabilirsiniz.
      </p>
      <p style={{ marginTop: "0.75rem" }}>
        Seans süresi genellikle ... dakikadır. Görüşmeler yetişkin bireylerle
        gerçekleştirilmektedir.
      </p>

      <div style={{ marginTop: "2rem" }}>
        {/* Buraya gerçek Calendly embed kodunu ekleyebilirsin */}
        <p>Buraya Calendly bileşeni yerleştirilecek.</p>
      </div>
    </section>
  );
}
import React from "react";

export default function ContactPage() {
  return (
    <section>
      <h1>İletişim</h1>
      <p style={{ marginTop: "1rem" }}>
        Randevu talebi, sorularınız veya bilgi almak istediğiniz konular için aşağıdaki formu
        doldurabilirsiniz.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        style={{ marginTop: "1rem", display: "grid", gap: "0.75rem", maxWidth: "480px" }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <label>
          Ad Soyad
          <input type="text" name="name" required />
        </label>

        <label>
          E-posta Adresi
          <input type="email" name="email" required />
        </label>

        <label>
          Tercih Ettiğiniz Görüşme Türü
          <select name="sessionType">
            <option value="online">Online Görüşme</option>
            <option value="face-to-face">Yüz Yüze Görüşme</option>
            <option value="unsure">Emin Değilim / Konuşmak İstiyorum</option>
          </select>
        </label>

        <label>
          Mesajınız
          <textarea name="message" rows="5" required />
        </label>

        <button
          type="submit"
          style={{
            marginTop: "0.5rem",
            padding: "0.7rem 1.4rem",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            cursor: "pointer",
          }}
        >
          Gönder
        </button>
      </form>

      <div style={{ marginTop: "2rem" }}>
        <h2>Diğer İletişim Kanalları</h2>
        <p style={{ marginTop: "0.5rem" }}>
          E-posta:{" "}
          <a href="mailto:psk.kadriyeylmzbekts@gmail.com">
            psk.kadriyeylmzbekts@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
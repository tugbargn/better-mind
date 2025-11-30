import React from "react";

export default function ServicesPage() {
  return (
    <section>
      <h1>Hizmetler</h1>

      <article style={{ marginTop: "1.25rem" }}>
        <h2>Bireysel Psikoterapi</h2>
        <p style={{ marginTop: "0.5rem" }}>
          Duygusal zorlanmalar, ilişki problemleri, özgüven ve kimlik ile ilgili konular,
          travmatik yaşantılar ve hayat geçiş dönemleri gibi birçok başlık bireysel terapi
          kapsamında ele alınır.
        </p>
      </article>

      <article style={{ marginTop: "1.25rem" }}>
        <h2>Online Terapi</h2>
        <p style={{ marginTop: "0.5rem" }}>
          Online seanslar, yüz yüze görüşmelerle benzer bir çerçevede yürür. Farklı şehirlerde
          yaşayan veya yoğun programı olan danışanlar için erişilebilir ve esnek bir seçenektir.
        </p>
      </article>

      <article style={{ marginTop: "1.25rem" }}>
        <h2>İlişki ve Bağlanma Odaklı Çalışmalar</h2>
        <p style={{ marginTop: "0.5rem" }}>
          Tekrarlayan ilişki döngüleri, terk edilme korkusu, yakınlık kurma güçlüğü ve sınır
          koyma problemleri; bağlanma stilimizle yakından ilişkilidir. Bu alanda, kişinin
          ilişkisel örüntülerini anlamlandırmasına eşlik ediyorum.
        </p>
      </article>

      <article style={{ marginTop: "1.25rem" }}>
        <h2>Psikoeğitim ve Kısa Süreli Danışmanlık</h2>
        <p style={{ marginTop: "0.5rem" }}>
          Kaygı yönetimi, özbakım, sınır koyma, tükenmişlikle başa çıkma gibi konularda daha kısa
          süreli, odaklı danışmanlık ve bilgilendirici çalışmalar da yapılabilmektedir.
        </p>
      </article>
    </section>
  );
}
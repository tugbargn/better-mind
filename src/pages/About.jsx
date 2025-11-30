import React from "react";

export default function AboutPage() {
  return (
    <section>
      <h1>Hakkımda</h1>

      <p style={{ marginTop: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
        scelerisque est. Donec at diam vel lorem facilisis bibendum sit amet
        eget nisl. Proin euismod, metus ac facilisis hendrerit, justo justo
        tristique augue, vitae pulvinar nunc purus a erat.
      </p>

      <p style={{ marginTop: "0.75rem" }}>
        Curabitur at malesuada lorem. Donec sed ligula in nunc tincidunt
        vehicula. Suspendisse potenti. Vestibulum tincidunt dui sed dolor
        suscipit bibendum. Sed consequat, nisl vitae faucibus consequat, risus
        velit volutpat lorem, sit amet consectetur orci urna ut lorem.
      </p>

      <p style={{ marginTop: "0.75rem" }}>
        Integer tristique tincidunt risus ut tincidunt. Praesent id aliquam
        mauris. In hac habitasse platea dictumst. Sed auctor, purus quis
        cursus tincidunt, justo enim cursus est, nec malesuada lacus lacus at
        nisl.
      </p>

      <h2 style={{ marginTop: "1.5rem" }}>Mesleki Eğitimler ve İlgi Alanları</h2>

      <ul style={{ marginTop: "0.75rem", paddingLeft: "1.2rem" }}>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer tristique tincidunt</li>
        <li>Sed auctor purus quis cursus tincidunt</li>
      </ul>
    </section>
  );
}
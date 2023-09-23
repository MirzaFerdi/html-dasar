let keyboard = [
  (kb1 = {
    nama: "Logitech K1 Keyboard",
    img: "../assets/img/product/k1.png",
    width: "width: 50%",
    price: "Rp. 500.000,00",
    desc: "Keyboard Logitech K1 menawarkan kombinasi sempurna antara kualitas, kenyamanan, dan keandalan. Didesain dengan ergonomi yang baik.",
  }),
  (kb2 = {
    nama: "Logitech K2 Keyboard",
    img: "../assets/img/product/k2.png",
    width: "width: 60%",
    price: "Rp. 850.000,00",
    desc: "Keyboard Logitech K2 menawarkan kombinasi sempurna antara kualitas, kenyamanan, dan keandalan. Didesain dengan ergonomi yang baik.",
  }),
  (kb3 = {
    nama: "Fantech A3 Keyboard",
    img: "../assets/img/product/k3.png",
    width: "width: 60%",
    price: "Rp. 450.000,00",
    desc: "Keyboard Fantech A3 menawarkan kombinasi sempurna antara kualitas, kenyamanan, dan keandalan. Didesain dengan ergonomi yang baik.",
  }),
  (kb4 = {
    nama: "Logitech Ao4 Keyboard",
    img: "../assets/img/product/k4.png",
    width: "width: 60%",
    price: "Rp. 325.000,00",
    desc: "Keyboard Logitech Ao4 menawarkan kombinasi sempurna antara kualitas, kenyamanan, dan keandalan. Didesain dengan ergonomi yang baik.",
  }),
];

let headset = [
  (hs1 = {
    nama: "Logitech G332 Headset",
    img: "../assets/img/product/h1.png",
    width: "width: 60%",
    price: "Rp. 350.000,00",
    desc: "Headset Logitech G332 menawarkan kualitas suara yang luar biasa dan kenyamanan maksimal. Didesain dengan desain yang stylish dan ergonomis.",
  }),
  (hs2 = {
    nama: "Corsair H2F Headset",
    img: "../assets/img/product/h2.png",
    width: "width: 85%",
    price: "Rp. 1.500.000,00",
    desc: "Headset Corsair H2F Headset menawarkan kualitas suara yang luar biasa dan kenyamanan maksimal. Didesain dengan desain yang stylish dan ergonomis.",
  }),
  (hs3 = {
    nama: "Rexus Thunder32 Headset",
    img: "../assets/img/product/h3.png",
    width: "width: 45%",
    price: "Rp. 400.000,00",
    desc: "Headset Rexus Thunder32 Headset menawarkan kualitas suara yang luar biasa dan kenyamanan maksimal. Didesain dengan desain yang stylish dan ergonomis.",
  }),
  (hs4 = {
    nama: "Razer R4 Headset",
    img: "../assets/img/product/h4.png",
    width: "width: 35%",
    price: "Rp. 1.350.000,00",
    desc: "Headset Razer R4 Headset menawarkan kualitas suara yang luar biasa dan kenyamanan maksimal. Didesain dengan desain yang stylish dan ergonomis.",
  }),
];
let monitor = [
  (mt1 = {
    nama: "Asus 20BJ 24' Monitor",
    img: "../assets/img/product/l1.png",
    width: "width: 50%",
    price: "Rp. 1.800.000,00",
    desc: "Monitor Asus 20BJ menawarkan kualitas gambar yang tajam dan warna yang akurat. Didesain dengan layar yang luas dan resolusi tinggi.",
  }),
  (mt2 = {
    nama: "AOC 3BHJ 22' Monitor",
    img: "../assets/img/product/l2.png",
    width: "width: 50%",
    price: "Rp. 1.150.000,00",
    desc: "Monitor AOC 3BHJ menawarkan kualitas gambar yang tajam dan warna yang akurat. Didesain dengan layar yang luas dan resolusi tinggi.",
  }),
  (mt3 = {
    nama: "AOC GO4B 24' Monitor",
    img: "../assets/img/product/l3.png",
    width: "width: 50%",
    price: "Rp. 2.750.000,00",
    desc: "Monitor AOC GO4B menawarkan kualitas gambar yang tajam dan warna yang akurat. Didesain dengan layar yang luas dan resolusi tinggi.",
  }),
  (mt4 = {
    nama: "Samsung IP2S 24' Monitor",
    img: "../assets/img/product/l4.png",
    width: "width: 50%",
    price: "Rp. 2.350.000,00",
    desc: "Monitor Samsung IP2S menawarkan kualitas gambar yang tajam dan warna yang akurat. Didesain dengan layar yang luas dan resolusi tinggi.",
  }),
];
let mouse = [
  (mt1 = {
    nama: "Razer M24 Mouse",
    img: "../assets/img/product/m1.png",
    width: "width: 50%",
    price: "Rp. 500.000,00",
    desc: "Mouse Razer M24 menawarkan presisi dan kenyamanan dalam penggunaan sehari-hari. Didesain dengan ergonomi yang baik.",
  }),
  (mt1 = {
    nama: "Logitech RB3 Mouse",
    img: "../assets/img/product/m2.png",
    width: "width: 40%",
    price: "Rp. 450.000,00",
    desc: "Mouse Logitech RB3 menawarkan presisi dan kenyamanan dalam penggunaan sehari-hari. Didesain dengan ergonomi yang baik.",
  }),
  (mt1 = {
    nama: "Logitech W1RL Mouse",
    img: "../assets/img/product/m3.png",
    width: "width: 65%",
    price: "Rp. 300.000,00",
    desc: "Mouse Logitech W1RL menawarkan presisi dan kenyamanan dalam penggunaan sehari-hari. Didesain dengan ergonomi yang baik.",
  }),
  (mt1 = {
    nama: "Sturdy GM0 Mouse",
    img: "../assets/img/product/m4.png",
    width: "width: 65%",
    price: "Rp. 150.000,00",
    desc: "Mouse Sturdy GM0 menawarkan presisi dan kenyamanan dalam penggunaan sehari-hari. Didesain dengan ergonomi yang baik.",
  }),
];

let source = "";

keyboard.forEach(function (isiKartu) {
  source  +=
    `
    <div class="card">
    
    <img
    class="img"
      src="${isiKartu.img}"      
      alt="Keyboard"
      style="${isiKartu.width}"
      />
      <h3 class="nama">
      ${isiKartu.nama}
    </h3>
    <p class="price">
    ${isiKartu.price}
    </p>
    <p class="desc">
    ${isiKartu.desc}
    <b>Lihat Selengkapnya</b>
    </p>
    
    </div>
    `;
});
headset.forEach(function (isiKartu) {
  source  +=
    `
    <div class="card">
    
    <img
    class="img"
      src="${isiKartu.img}"      
      alt="Headset"
      style="${isiKartu.width}"
      />
      <h3 class="nama">
      ${isiKartu.nama}
    </h3>
    <p class="price">
    ${isiKartu.price}
    </p>
    <p class="desc">
    ${isiKartu.desc}
    <b>Lihat Selengkapnya</b>
    </p>
    
    </div>
    `;
});
monitor.forEach(function (isiKartu) {
  source  +=
    `
    <div class="card">
    
    <img
    class="img"
      src="${isiKartu.img}"      
      alt="Monitor"
      style="${isiKartu.width}"
      />
      <h3 class="nama">
      ${isiKartu.nama}
    </h3>
    <p class="price">
    ${isiKartu.price}
    </p>
    <p class="desc">
    ${isiKartu.desc}
    <b>Lihat Selengkapnya</b>
    </p>
    
    </div>
    `;
});
mouse.forEach(function (isiKartu) {
  source  +=
    `
    <div class="card">
    
    <img
    class="img"
      src="${isiKartu.img}"      
      alt="Mouse"
      style="${isiKartu.width}"
      />
      <h3 class="nama">
      ${isiKartu.nama}
    </h3>
    <p class="price">
    ${isiKartu.price}
    </p>
    <p class="desc">
    ${isiKartu.desc}
    <b>Lihat Selengkapnya</b>
    </p>
    
    </div>
    `;
});

const kartuProduk = document.querySelector(".row");
kartuProduk.innerHTML = source;







// Fungsi Dropdown
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
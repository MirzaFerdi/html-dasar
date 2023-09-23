const apiURL = "https://650aea10dfd73d1fab092c2f.mockapi.io";
const productEndpoint = `${apiURL}/produk`;

// Get Produk
function fetchProduct() {
  fetch(productEndpoint)
    .then((response) => response.json())
    .then((result) => {
      let row = document.querySelector(".row");
      let isi = "";

      result.forEach((produk) => {
        isi += `
          <div class="card">
            <img class="img"
              src="${produk.img}"      
              alt="Keyboard"
              style="${produk.width}"
            />
            <h3 class="nama">
              ${produk.nama}
            </h3>
            <p class="price">
              ${produk.price}
            </p>
            <p class="desc">
              ${produk.desc}
              <b>Lihat Selengkapnya</b>
            </p>
          </div>`;
      });
      row.innerHTML = isi;
    });
}

fetchProduct();

// Post Produk
function postProduk(produk) {
  produk.forEach((produk) => {
    fetch(productEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produk),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("berhasil menambahkan data");
      });
  });
}

function updateProduk(produk) {
  let idProduct = document.getElementById("idProduct").value;
  fetch(`${productEndpoint}/${idProduct}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produk),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("berhasil mengubah data");
    });
}

// Delete Produk
function deleteProduk() {
  let idProduct = document.getElementById("idProduct").value;
  fetch(`${productEndpoint}/${idProduct}`, {
    method: "DELETE",
  }).then((response) => {
    response.json();
    console.log("hapus data berhasil");
  });
}

// FUNGSI DROPDOWN MENU
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

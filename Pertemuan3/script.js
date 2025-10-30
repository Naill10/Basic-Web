const semua_tombol = document.querySelectorAll(".filter-btn")
const semua_gambar = document.querySelectorAll(".gambar")

// TOMBOL
semua_tombol.forEach((tombol_satuan) => {
    tombol_satuan.addEventListener("click", () => {

        // BAGIAN 1 TOMBOL
        semua_tombol.forEach((btn) => btn.classList.remove("active"));
        tombol_satuan.classList.add("active");

        // BAGIAN 2 FILTER
        const filter = tombol_satuan.getAttribute("data-filter");

        // BAGIAN 3 GAMBAR
        semua_gambar.forEach((gambar_satuan) => {
            if (filter === "ALLS" || gambar_satuan.classList.contains
                (filter))
              {  gambar_satuan.style.display = "block"
            } else{
                gambar_satuan.style.display = "none"
            }
        });
    });
});
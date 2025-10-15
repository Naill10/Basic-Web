//ambil semua tombol yang memeiliki class "filter-button"
//
const filter_butttons = document.querySelectorAll (".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");

filter_butttons.forEach((one_buttons) => {
    one_buttons.addEventListener("click", () => {
        //ubah tampilan active
        //hapus class "active" dari semua button
        filter_butttons.forEach((btn) => btn.classList.remove
        ("active"));
        //tambahkan class active ke tombol yang sedang active
        one_buttons.classList.add("active")
        const filter = one_buttons.getAttribute("data-filter")
        semua_gambar.forEach((gambar_satuan) => {
            if(filter === "All" || gambar_satuan.classList.contains
                (filter)) {
                    gambar_satuan.style.display = "block"
                } else {
                    gambar_satuan.style.display = "none"
                }
                
                

            
       
        })
    });
});
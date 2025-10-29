const all_buttons = document.querySelectorAll(".filter-btn")
const all_images = document.querySelectorAll(".images")

all_buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // Bagian 1: Button
        all_buttons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        // Bagian 2: 
        const filter = button.getAttribute("data-filter");

        // Bagian 3:
        all_images.forEach((img) => {
            if(filter === "all" || img.getAttribute("data-filter") === filter){
                img.style.display = "block";
            }
            else{
                img.style.display = "none";
            }
        });
    });
});x
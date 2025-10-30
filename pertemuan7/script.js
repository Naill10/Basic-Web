const form= document.getElementbyId("MyForm")
const nameInput= document.getElementById("name")
const email= document.getElementById ("email")
const password= document.getElementById ("password")

const nameError = document.getElementById("nameError");
const emailError = document.getElementById ("emailError");
const passwordError = document.getElementById ("passwordError");

form.addEventListener("submit", function (event){
    event.preventDefault();

//reset pesan error
nameError.textContent = "";
emailError.textContent = "";
passwordError.textContent = "";

//validasi nama
if (nameInput.value.trim() === "") {
    nameError.textContent = "Nama tidak boleh kosong"
}
if (emailInput.value.trim() === "") {
    emailError.textContent = "Email tidak boleh kosong"
}
if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password tidak boleh kosong"
}

});


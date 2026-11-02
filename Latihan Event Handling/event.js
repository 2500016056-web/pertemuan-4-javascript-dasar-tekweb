// Membuat Form
let form = document.createElement("form");

// Input Nama
let labelNama = document.createElement("label");
labelNama.textContent = "Nama:";
let inputNama = document.createElement("input");
inputNama.type = "text";
inputNama.id = "nama";
inputNama.placeholder = "Masukkan nama lengkap";

// Input Email
let labelEmail = document.createElement("label");
labelEmail.textContent = "Email:";
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.placeholder = "contoh@gmail.com";

// Tombol Submit
let btnSubmit = document.createElement("button");
btnSubmit.type = "button";
btnSubmit.textContent = "Submit";

// Area Pesan Error
let errorDiv = document.createElement("div");
errorDiv.id = "error-message";

// Menambah Event Listener
btnSubmit.onclick = function () {
    let nama = inputNama.value.trim();
    let email = inputEmail.value.trim();
    let errorMessage = "";

    if (nama === "") {
        errorMessage += "• Nama tidak boleh kosong!\n";
    }

    if (email.indexOf("@") === -1) {
        errorMessage += "• Email harus mengandung karakter '@'!\n";
    }

    // Cek status error (Sudah diperbaiki dari typo errorMesage & errorDib)
    if (errorMessage !== "") {
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = "#d63031"; // Warna merah
    } else {
        errorDiv.textContent = "✓ Form Valid! Data berhasil dikirim.";
        errorDiv.style.color = "#00b894"; // Warna hijau
    }
};

// Menyusun Elemen ke Dalam Form
form.appendChild(labelNama);
form.appendChild(inputNama);
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(btnSubmit);
form.appendChild(errorDiv);

// Menampilkan Form ke HTML
let outputDiv = document.getElementById("output4");
outputDiv.appendChild(form);
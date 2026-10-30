const inputPertama = document.querySelector("#angka1");
const inputKedua = document.querySelector("#angka2");
const hasil = document.querySelector("#hasil");

document.querySelector(".operations").addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-operation]");
    if (!tombol) return;

    if (inputPertama.value.trim() === "" || inputKedua.value.trim() === "") {
        hasil.textContent = "Isi kedua angka terlebih dahulu";
        return;
    }

    const angka1 = Number(inputPertama.value);
    const angka2 = Number(inputKedua.value);
    let nilai;

    switch (tombol.dataset.operation) {
        case "add":
            nilai = angka1 + angka2;
            break;
        case "subtract":
            nilai = angka1 - angka2;
            break;
        case "multiply":
            nilai = angka1 * angka2;
            break;
        case "divide":
            if (angka2 === 0) {
                hasil.textContent = "Tidak bisa membagi dengan nol";
                return;
            }
            nilai = angka1 / angka2;
            break;
        default:
            return;
    }

    hasil.textContent = Number.isFinite(nilai) ? String(nilai) : "Hasil tidak valid";
});
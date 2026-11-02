let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";

btnBackground.onclick = function() {
    if (document.body.style.backgroundColor === "rgb(232, 244, 252)" || document.body.style.backgroundColor === "e8f4fc") {
        document.body.style.backgroundColor = "#ffeaa7"; 
    } else {
        document.body.style.backgroundColor = "#e8f4fc"; 
    }
};


let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";

btnTextColor.onclick = function() {
    if (document.body.style.color === "rgb(44, 62, 80)" || document.body.style.color === "2c3e50") {
        document.body.style.color = "#d63031"; 
    } else {
        document.body.style.color = "#2c3e50"; 
    }
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";

let fontSize = 16; 

btnIncreaseFont.onclick = function() {
    fontSize += 1; // 
    
    
    let container = document.querySelector(".container");
    container.style.fontSize = fontSize + "px";
};

let outputDiv = document.getElementById("output3");
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);
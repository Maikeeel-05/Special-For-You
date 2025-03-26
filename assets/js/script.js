document.addEventListener("DOMContentLoaded", function() {
    const mainButton = document.getElementById("main-button");
    const welcomeContainer = document.getElementById("welcome-container");
    const contentContainer = document.getElementById("content-container");
    const exitButton = document.getElementById("exit-button");

    mainButton.addEventListener("click", function () {
        welcomeContainer.style.opacity = "0"; // Fade-out
        setTimeout(() => {
            welcomeContainer.style.display = "none";
            contentContainer.style.display = "block";
            setTimeout(() => {
                contentContainer.style.opacity = "1"; // Fade-in
            }, 50); 
        }, 500); // Lebih cepat
    });
    
    exitButton.addEventListener("click", function () {
        contentContainer.style.opacity = "0"; // Fade-out
        setTimeout(() => {
            contentContainer.style.display = "none";
            welcomeContainer.style.display = "block";
            setTimeout(() => {
                welcomeContainer.style.opacity = "1"; // Fade-in
            }, 50);
        }, 500);
    });

    // Container untuk love jatuh
    const fallingContainer = document.createElement("div");
    fallingContainer.classList.add("falling-elements");
    document.body.appendChild(fallingContainer);

    let isActive = true; // Efek aktif saat pertama kali masuk

    function createFallingHeart() {
        if (!isActive) return; // Jika efek dimatikan, jangan buat hati baru
    
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
    
        // Durasi animasi minimal 4 detik, maksimal 7 detik
        const duration = Math.random() * 3 + 4; 
        heart.style.animationDuration = duration + "s"; 
    
        // Rotasi acak
        const rotateStart = Math.random() * 360 + "deg";
        const rotateEnd = Math.random() * 720 + "deg";
        heart.style.setProperty("--rotate-start", rotateStart);
        heart.style.setProperty("--rotate-end", rotateEnd);
    
        document.body.appendChild(heart);
    
        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Jalankan efek hati secara berkala
    const heartInterval = setInterval(createFallingHeart, 500);
    
    // Fungsi untuk menghentikan efek saat masuk
    function stopFallingHearts() {
        isActive = false; // Set state agar hati baru tidak dibuat lagi
        setTimeout(() => clearInterval(heartInterval), 5000); // Setelah 5 detik, hentikan total
    }
    
    // Event listener untuk tombol masuk
    document.getElementById("main-button").addEventListener("click", () => {
        stopFallingHearts();
    });        

    setInterval(createFallingHeart, 600); // Hati jatuh setiap 0.6 detik
});
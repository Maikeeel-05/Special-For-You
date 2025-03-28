document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById("main-button");
    const welcomeContainer = document.getElementById("welcome-container");
    const contentContainer = document.getElementById("content-container");
    const exitButton = document.getElementById("exit-button");

    mainButton.addEventListener("click", function () {
        welcomeContainer.classList.add("fade-out"); // Hilangkan dengan fade-out
        setTimeout(() => {
            welcomeContainer.style.display = "none"; // Sembunyikan
            contentContainer.classList.add("show"); // Tampilkan konten utama
        }, 1500);

        stopFallingHearts(); // Hentikan efek hati saat masuk
    });

    exitButton.addEventListener("click", function () {
        contentContainer.classList.remove("show");
        setTimeout(() => {
            welcomeContainer.style.display = "flex"; // Munculkan kembali halaman utama
            welcomeContainer.classList.remove("fade-out"); // Hapus efek fade-out
        }, 500);

        restartHeartEffect(); // Aktifkan kembali efek hati saat keluar
    });

    // Container untuk love jatuh
    const fallingContainer = document.createElement("div");
    fallingContainer.classList.add("falling-elements");
    document.body.appendChild(fallingContainer);

    let isActive = true; // Efek aktif saat pertama kali masuk
    let heartInterval; // Variabel untuk menyimpan interval efek hati

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

    function startHeartEffect() {
        isActive = true;
        heartInterval = setInterval(createFallingHeart, 600); // Hati jatuh setiap 0.6 detik
    }

    function stopFallingHearts() {
        isActive = false; // Set state agar hati baru tidak dibuat lagi
        clearInterval(heartInterval); // Hentikan efek hati
    }

    function restartHeartEffect() {
        document.querySelectorAll(".heart").forEach((heart) => heart.remove()); // Hapus semua hati yang ada
        setTimeout(startHeartEffect, 500); // Tunggu sebentar sebelum memulai ulang efek hati
    }

    // Jalankan efek hati pertama kali saat halaman dimuat
    startHeartEffect();
});

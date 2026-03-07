document.addEventListener("DOMContentLoaded", function() {
    // Menyeleksi semua elemen yang memiliki class 'reveal'
    const reveals = document.querySelectorAll(".reveal");

    // Membuat observer untuk mendeteksi scroll
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke dalam viewport layar
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Hapus observer jika Anda ingin animasi hanya berjalan sekali (pertama kali saja)
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15, // Animasi aktif saat 15% bagian elemen sudah terlihat di layar
        rootMargin: "0px 0px -50px 0px"
    });

    // Terapkan observer ke setiap elemen 'reveal'
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
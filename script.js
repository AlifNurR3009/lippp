let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik

document.getElementById('openMessageBtn').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.classList.toggle('hidden');
});

// Fungsi untuk membuat efek love
document.getElementById('loveLogo').addEventListener('click', function(event) {
    const loveEffectContainer = document.getElementById('loveEffectContainer');
    const loveEffect = document.createElement('div');
    loveEffect.innerText = '❤️';
    loveEffect.classList.add('love-effect');

    // Posisikan efek love di tempat logo diklik
    const x = event.clientX;
    const y = event.clientY;
    loveEffect.style.left = `${x - 15}px`; // Sesuaikan posisi agar tepat di tengah
    loveEffect.style.top = `${y - 15}px`;

    // Tambahkan efek ke container
    loveEffectContainer.appendChild(loveEffect);

    // Hapus efek setelah animasi selesai
    setTimeout(() => {
        loveEffect.remove();
    }, 1000);
});
document.getElementById("loveLogo").addEventListener("click", function() {
    const video = document.getElementById("loveVideo");
    video.style.display = "block"; // Tampilkan video
    video.play(); // Mulai memutar video
});
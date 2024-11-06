window.onload = function() {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke atas
    };
    const gambar = document.getElementById('gambar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const gambarList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']; // Ganti dengan path gambar yang sesuai
    let index = 0;
    let interval;
    
    // Fungsi untuk mengganti gambar
    function gantiGambar(nextIndex) {
        gambar.style.opacity = '0'; // Fade out gambar
        gambar.style.transform = 'translateX(-100%)'; // Geser keluar ke kiri
    
        setTimeout(() => {
            gambar.src = gambarList[nextIndex];
            gambar.style.opacity = '0'; // Pastikan gambar baru juga tersembunyi
            gambar.style.transform = 'translateX(100%)'; // Geser masuk dari kanan
    
            setTimeout(() => {
                gambar.style.opacity = '1'; // Fade in gambar
                gambar.style.transform = 'translateX(0)'; // Kembali ke posisi awal
            }, 50); // Sedikit delay untuk memastikan gambar baru siap muncul
        }, 500); // Durasi fade out
        index = nextIndex;
    }
    
    // Fungsi untuk memulai interval
    function startInterval() {
        interval = setInterval(() => {
            const nextIndex = (index + 1) % gambarList.length;
            gantiGambar(nextIndex);
        }, 3000); // Ganti gambar setiap 3 detik
    }
    
    // Mulai interval saat pertama kali
    startInterval();
    
    // Ganti gambar saat tombol ditekan
    prevBtn.addEventListener('click', () => {
        clearInterval(interval); // Hentikan interval saat tombol ditekan
        const prevIndex = (index - 1 + gambarList.length) % gambarList.length;
        gantiGambar(prevIndex);
        startInterval(); // Mulai kembali interval
    });
    
    nextBtn.addEventListener('click', () => {
        clearInterval(interval); // Hentikan interval saat tombol ditekan
        const nextIndex = (index + 1) % gambarList.length;
        gantiGambar(nextIndex);
        startInterval(); // Mulai kembali interval
    });
    document.addEventListener('DOMContentLoaded', () => {
        const fireText = document.getElementById('fireText');
    
        // Function to create a fire particle
        function createFireParticle() {
            const particle = document.createElement('span');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + 'px';
            particle.style.animationDuration = Math.random() * 2 + 1 + 's';
            particle.style.opacity = Math.random();
            fireText.appendChild(particle);
    
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }
    
        // Create multiple particles at intervals
        setInterval(createFireParticle, 200);
    });
    
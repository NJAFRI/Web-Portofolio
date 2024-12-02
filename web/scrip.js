// Script untuk Hamburger Menu (jika diperlukan)
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

function checkOrientation() {
    const warning = document.getElementById('rotate-warning');
    const konten = document.querySelector('.konten'); // Ganti dengan konten yang sesuai
    if (window.innerWidth < window.innerHeight) {
        // Jika orientasi portrait
        konten.style.display = 'none';
        warning.style.display = 'block';
    } else {
        // Jika orientasi landscape
        konten.style.display = 'block';
        warning.style.display = 'none';
    }
}

// Jalankan pemeriksaan saat halaman dimuat
window.addEventListener('load', checkOrientation);

// Jalankan pemeriksaan saat layar dirotasi
window.addEventListener('resize', checkOrientation);



// Simpan status zoom
function saveZoomLevel() {
    const zoomLevel = document.body.style.transform.replace('scale(', '').replace(')', '') || '1'; // Ambil level zoom saat ini
    localStorage.setItem('zoomLevel', zoomLevel); // Simpan ke localStorage
}

// Atur zoom saat halaman dimuat
function setZoomLevel() {
    const savedZoomLevel = localStorage.getItem('zoomLevel');
    if (savedZoomLevel) {
        document.body.style.transform = `scale(${savedZoomLevel})`; // Atur zoom ke nilai yang disimpan
    } else {
        document.body.style.transform = 'scale(1)'; // Atur zoom ke default jika tidak ada yang disimpan
    }
}

// Reset zoom ke default saat berpindah halaman
function resetZoom() {
    document.body.style.transform = 'scale(1)'; // Atur zoom ke 100%
}

// Jalankan fungsi saat halaman dimuat
window.addEventListener('load', () => {
    setZoomLevel(); // Atur zoom saat halaman dimuat
});

// Tambahkan event listener untuk menyimpan zoom saat pengguna mengubah zoom
window.addEventListener('resize', saveZoomLevel); // Simpan zoom saat ukuran jendela diubah

// Tambahkan event listener untuk reset zoom saat berpindah halaman
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', resetZoom); // Reset zoom saat menu diklik
});

document.getElementById('zoomIn').addEventListener('click', () => {
    let currentZoom = parseFloat(document.body.style.transform.replace('scale(', '').replace(')', '')) || 1;
    currentZoom += 0.1; // Tambah zoom
    document.body.style.transform = `scale(${currentZoom})`; // Gunakan transform
});

document.getElementById('zoomOut').addEventListener('click', () => {
    let currentZoom = parseFloat(document.body.style.transform.replace('scale(', '').replace(')', '')) || 1;
    currentZoom -= 0.1; // Kurangi zoom
    if (currentZoom < 0.5) currentZoom = 0.5; // Set batas minimum zoom
    document.body.style.transform = `scale(${currentZoom})`; // Gunakan transform
});




// Mengambil semua elemen <a> dengan atribut href
const links = document.querySelectorAll('a[href]');

// Menerapkan style pada setiap elemen <a>
links.forEach(link => {
    link.style.color = 'blue'; // Mengubah warna teks menjadi biru
    link.style.textDecoration = 'underline'; // Menambahkan garis bawah
    link.style.fontWeight = 'bold'; // Mengubah font menjadi tebal

    // Menambahkan efek hover menggunakan JavaScript
    link.addEventListener('mouseover', () => {
        link.style.color = 'red'; // Mengubah warna teks saat hover
        link.style.textDecoration = 'none'; // Menghapus garis bawah saat hover
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'blue'; // Mengembalikan warna teks
        link.style.textDecoration = 'underline'; // Mengembalikan garis bawah
    });
});








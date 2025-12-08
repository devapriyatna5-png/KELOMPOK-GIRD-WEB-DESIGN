// =================================================================
// File: script.js
// JavaScript untuk menangani fungsi slider gambar (Gaya Hidup Sehat)
// =================================================================

const sliderWrapper = document.getElementById('sliderWrapper');
// Mengambil semua elemen gambar dengan class 'slider-item'
const sliderItems = document.querySelectorAll('.slider-item');
const totalItems = sliderItems.length;
let currentIndex = 0;

/**
 * Memperbarui tampilan slider dengan menggeser wrapper
 * berdasarkan currentIndex.
 */
function updateSlider() {
    // Menghitung persentase pergeseran. Karena semua gambar harus terlihat satu per satu,
    // kita menghitung persentase geser berdasarkan jumlah total item.
    // Jika ada 4 item, setiap geseran adalah 100% / 4 = 25% dari total lebar wrapper.
    const slidePercentage = 100 / totalItems;
    
    // Menghitung offset (pergeseran) yang dibutuhkan.
    // Misalnya, untuk slide ke-1 (currentIndex=1), offset adalah -25%.
    const offset = -currentIndex * slidePercentage;

    // Menerapkan pergeseran menggunakan transformasi CSS
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

/**
 * Menggeser slider ke gambar berikutnya.
 * Dipanggil oleh tombol '❯' (next-button).
 */
function nextSlide() {
    currentIndex++;
    
    // Jika sudah melebihi batas, kembali ke slide pertama (looping)
    if (currentIndex >= totalItems) {
        currentIndex = 0; 
    }
    
    updateSlider();
}

/**
 * Menggeser slider ke gambar sebelumnya.
 * Dipanggil oleh tombol '❮' (prev-button).
 */
function prevSlide() {
    currentIndex--;
    
    // Jika sudah kurang dari 0, pindah ke slide terakhir (looping)
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }
    
    updateSlider();
}

// Memastikan tampilan slider diinisialisasi saat halaman dimuat
// untuk menampilkan slide pertama dengan benar.
window.addEventListener('load', updateSlider);


// Catatan: Inisialisasi Feather Icons (feather.replace()) 
// sudah Anda lakukan dengan benar di tag <script> di bagian akhir HTML, 
// jadi tidak perlu diulang di file ini.
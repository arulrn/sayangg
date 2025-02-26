// Kata sandi yang telah ditentukan sebelumnya
const KATASANDI = "020403"; // Ubah ini menjadi kata sandi pilihan Anda

// Variabel untuk menyimpan kata sandi yang dimasukkan
let sandiDimasukkan = "";

// Fungsi untuk menambahkan angka ke tampilan
function addNumber(number) {
    const kataSandi = document.getElementById('kata-sandi');
    const display = document.querySelector('.display');

    // Jika teks saat ini adalah “Kata Sandi”, kita hapus.
    if (kataSandi.textContent === 'Birthday Date') {
        kataSandi.textContent = '';
    }

    // Menambahkan nomor ke teks (dalam mode kata sandi)
    kataSandi.textContent += '*'; // Kami menggunakan titik sebagai karakter kata sandi.

    // Menyimpan angka yang sebenarnya dalam variabel
    sandiDimasukkan += number;

    // Menambahkan kelas untuk mode kata sandi
    display.classList.add('mode-password');

    // Memvalidasi kata sandi ketika panjang yang benar dimasukkan
    if (sandiDimasukkan.length === KATASANDI.length) {
        if (sandiDimasukkan === KATASANDI) {
            alert(
                "selamat"
            ); // Tampilkan penghitung jika kata sandi benar
        } else {
            alert("Kata sandi salah. Coba lagi."); // Tampilkan pesan kesalahan
            kataSandi.textContent = 'Birthday Date'; // Setel ulang teks
            display.classList.remove('mode-password'); // Menghapus mode kata sandi
            sandiDimasukkan = ""; // Setel ulang kata sandi yang dimasukkan
        }
    }
}
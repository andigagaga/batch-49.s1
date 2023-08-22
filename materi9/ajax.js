// Apa itu AJAX?
// Pada dasarnya, AJAX adalah teknik dalam JavaScript yang memungkinkan kita untuk berinteraksi dengan permintaan asinkron.
// Contoh, jika Anda mengambil data dari internet.
const xhr = new XMLHttpRequest();

// Syntax dasar yang kita pelajari terlihat seperti ini
xhr.open("GET", "https://your-url", true);
// parameter 1: metodenya
// parameter 2: URL-nya
// parameter 3: true atau false, jika true berarti kita menggunakan asinkron WebAssembly, jika false berarti kita menggunakan cara sinkron. Disarankan untuk membuatnya true (async).

xhr.onload = function () {}; // untuk memuat dan memeriksa status permintaan
xhr.onerror = function () {}; // dijalankan ketika terjadi kesalahan saat kita meminta data
xhr.send(); // mengirim permintaan ke server

// AJAX adalah teknik untuk melakukan permintaan HTTP asinkron dari halaman web ke server, menggunakan objek XMLHttpRequest di browser. Karena objek XMLHttpRequest spesifik untuk lingkungan browser, itu tidak dapat digunakan langsung di Node.JS. Oleh karena itu, kita akan membuatnya langsung di dalam proyek kita.
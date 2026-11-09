// ===== SE 1: baca harga paket x jumlah hari =====

function formatRupiah(angka) {
  return "Rp" + Math.round(angka).toLocaleString("id-ID");
}

// Membaca harga paket yang dipilih
function ambilHargaPaket() {
  return Number(document.getElementById("paket").value);
}

// Membaca nama paket yang dipilih
function ambilNamaPaket() {
  var pilihan = document.getElementById("paket");
  return pilihan.options[pilihan.selectedIndex].getAttribute("data-nama");
}

// Membaca jumlah hari peminjaman
function ambilJumlahHari() {
  return Number(document.getElementById("jumlah-hari").value);
}

// Fungsi dasar: harga paket dikalikan jumlah hari
function hitungHargaDasar(hargaPaket, jumlahHari) {
  return hargaPaket * jumlahHari;
}

// Dijalankan saat tombol Hitung ditekan
function hitungTotal() {
  var hasil = document.getElementById("hasil");
  var namaPaket = ambilNamaPaket();
  var hargaPaket = ambilHargaPaket();
  var jumlahHari = ambilJumlahHari();

  if (!Number.isInteger(jumlahHari) || jumlahHari < 1) {
    hasil.className = "calc-result error";
    hasil.innerHTML = "<p>Masukkan jumlah hari berupa bilangan bulat minimal 1.</p>";
    return;
  }

  var hargaAwal = hitungHargaDasar(hargaPaket, jumlahHari);

  // ===== BAGIAN SE 2: logika kode promo & diskon ditambahkan di sini =====

  hasil.className = "calc-result";
  hasil.innerHTML =
    "<h3>Rincian Biaya Sewa</h3>" +
    "<ul class=\"calc-detail\">" +
      "<li><span>Paket</span><strong>" + namaPaket + "</strong></li>" +
      "<li><span>Harga per hari</span><strong>" + formatRupiah(hargaPaket) + "</strong></li>" +
      "<li><span>Jumlah hari</span><strong>" + jumlahHari + " hari</strong></li>" +
      "<li class=\"total\"><span>Harga awal</span><strong>" + formatRupiah(hargaAwal) + "</strong></li>" +
    "</ul>";
}

// Hubungkan form dengan fungsi hitung
document.getElementById("calc-form").addEventListener("submit", function (event) {
  event.preventDefault();
  hitungTotal();
});

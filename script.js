// ===== PENGATURAN PROMO (ubah di sini bila perlu) =====
var KODE_PROMO = "CINEMA10";  // kode promo kelompok (dari PM 2)
var PERSEN_DISKON = 10;       // diskon 10 persen
var MIN_HARI_DISKON = 3;      // diskon juga berlaku jika sewa minimal 3 hari

function formatRupiah(angka) {
  return "Rp" + Math.round(angka).toLocaleString("id-ID");
}

// ===== SE 1: baca harga paket x jumlah hari =====

function ambilHargaPaket() {
  return Number(document.getElementById("paket").value);
}

function ambilNamaPaket() {
  var pilihan = document.getElementById("paket");
  return pilihan.options[pilihan.selectedIndex].getAttribute("data-nama");
}

function ambilJumlahHari() {
  return Number(document.getElementById("jumlah-hari").value);
}

function hitungHargaDasar(hargaPaket, jumlahHari) {
  return hargaPaket * jumlahHari;
}

// ===== SE 2: logika kode promo dan diskon =====

function hitungDiskon(hargaAwal, jumlahHari, kodePromo) {
  var kode = kodePromo.trim().toUpperCase();
  var diskon = 0;
  var keterangan = "";
  var dapatDiskon = false;

  if (kode === KODE_PROMO) {
    diskon = hargaAwal * PERSEN_DISKON / 100;
    keterangan = "Kode promo " + KODE_PROMO + " berhasil dipakai (diskon " + PERSEN_DISKON + "%).";
    dapatDiskon = true;
  } else if (jumlahHari >= MIN_HARI_DISKON) {
    diskon = hargaAwal * PERSEN_DISKON / 100;
    keterangan = "Diskon " + PERSEN_DISKON + "% karena sewa minimal " + MIN_HARI_DISKON + " hari.";
    dapatDiskon = true;
  } else if (kode !== "") {
    keterangan = "Kode promo tidak valid, sehingga tidak ada diskon.";
  } else {
    keterangan = "Tidak ada diskon. Gunakan kode promo atau sewa minimal " + MIN_HARI_DISKON + " hari.";
  }

  return { diskon: diskon, keterangan: keterangan, dapatDiskon: dapatDiskon };
}

// ===== Dijalankan saat tombol Hitung ditekan =====

function hitungTotal() {
  var hasil = document.getElementById("hasil");
  var namaPaket = ambilNamaPaket();
  var hargaPaket = ambilHargaPaket();
  var jumlahHari = ambilJumlahHari();
  var kodePromo = document.getElementById("kode-promo").value;

  if (!Number.isInteger(jumlahHari) || jumlahHari < 1) {
    hasil.className = "calc-result error";
    hasil.innerHTML = "<p>Masukkan jumlah hari berupa bilangan bulat minimal 1.</p>";
    return;
  }

  var hargaAwal = hitungHargaDasar(hargaPaket, jumlahHari);
  var info = hitungDiskon(hargaAwal, jumlahHari, kodePromo);
  var totalBayar = hargaAwal - info.diskon;

  hasil.className = "calc-result" + (info.dapatDiskon ? " success" : "");
  hasil.innerHTML =
    "<h3>Rincian Biaya Sewa</h3>" +
    "<ul class=\"calc-detail\">" +
      "<li><span>Paket</span><strong>" + namaPaket + "</strong></li>" +
      "<li><span>Harga per hari</span><strong>" + formatRupiah(hargaPaket) + "</strong></li>" +
      "<li><span>Jumlah hari</span><strong>" + jumlahHari + " hari</strong></li>" +
      "<li><span>Harga awal</span><strong>" + formatRupiah(hargaAwal) + "</strong></li>" +
      "<li><span>Potongan diskon</span><strong>- " + formatRupiah(info.diskon) + "</strong></li>" +
      "<li class=\"total\"><span>Total bayar akhir</span><strong>" + formatRupiah(totalBayar) + "</strong></li>" +
    "</ul>" +
    "<p class=\"calc-note\">" + info.keterangan + "</p>";
}

// Hubungkan form dengan fungsi hitung
document.getElementById("calc-form").addEventListener("submit", function (event) {
  event.preventDefault();
  hitungTotal();
});

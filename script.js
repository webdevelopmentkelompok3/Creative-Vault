<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Creative Vault</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<!-- CALC SECTION - SE 1 -->
<section id="calc-section" data-role="SE">
  <div class="calc-container">
    <h2 class="calc-title">Kalkulator Simulasi Sewa</h2>
    <p class="calc-subtitle">
      Pilih paket, tentukan jumlah hari peminjaman alat, dan masukkan kode promo
      untuk melihat estimasi biaya sewa di Creative Vault.
    </p>

    <form id="calc-form" class="calc-form" novalidate>

      <div class="form-group">
        <label for="paket">Pilih Paket</label>
        <select id="paket" name="paket">
          <option value="150000" data-nama="Paket Kamera Dasar">Paket Kamera Dasar - Rp150.000 / hari</option>
          <option value="350000" data-nama="Paket Peralatan Vlog Lengkap">Paket Peralatan Vlog Lengkap - Rp350.000 / hari</option>
          <option value="750000" data-nama="Paket Produksi Sinema">Paket Produksi Sinema - Rp750.000 / hari</option>
        </select>
      </div>

      <div class="form-group">
        <label for="jumlah-hari">Jumlah Hari Peminjaman Alat</label>
        <input type="number" id="jumlah-hari" name="jumlah-hari" min="1" step="1" value="1" placeholder="Contoh: 3">
      </div>

      <div class="form-group">
        <label for="kode-promo">Kode Promo</label>
        <input type="text" id="kode-promo" name="kode-promo" placeholder="Masukkan kode promo (opsional)" autocomplete="off">
      </div>

      <button type="submit" id="btn-hitung" class="btn-hitung">Hitung</button>
    </form>

    <!-- Tempat hasil perhitungan -->
    <div id="hasil" class="calc-result" aria-live="polite"></div>
  </div>
</section>

<script src="script.js"></script>
</body>
</html>

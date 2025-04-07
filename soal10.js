function hitungKembalian(bayar, belanja) {
    let kembalian = bayar - belanja;
    const pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    const hasil = {};
  
    for (let uang of pecahan) {
      let jumlah = Math.floor(kembalian / uang);
      if (jumlah > 0) {
        hasil[uang] = jumlah;
        kembalian -= uang * jumlah;
      }
    }
    return hasil;
  }
  
  console.log(hitungKembalian(10000, 7500));
  console.log(hitungKembalian(5000, 1100));
  console.log(hitungKembalian(178000, 90500));
  
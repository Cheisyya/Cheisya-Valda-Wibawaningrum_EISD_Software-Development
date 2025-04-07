function cariAnakNakal(arr) {
    const count = {};
    arr.forEach(nama => count[nama] = (count[nama] || 0) + 1);
  
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    const max = sorted[0][1];
  
    if (max === 1) {
      return "Semuanya anak baik";
    }
  
    const hasil = sorted.filter(([_, v]) => v === max).map(([nama]) => nama);
    return hasil.length === 1
      ? `${hasil[0]} Nackal`
      : `${hasil.join(' dan ')} Nackal`;
  }
  
  console.log(cariAnakNakal(["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"]));
  console.log(cariAnakNakal(["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"]));
  console.log(cariAnakNakal(["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"]));
  
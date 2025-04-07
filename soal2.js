function cekPalindrom(kalimat) {
  const teks = kalimat.replace(/\s+/g, '').toLowerCase();
  const kebalikan = teks.split('').reverse().join('');
  return teks === kebalikan ? "eureeka!" : "suka blyat";
}

console.log(cekPalindrom("Angsa"));             
console.log(cekPalindrom("KataK"));             
console.log(cekPalindrom("kasur empuk"));      
console.log(cekPalindrom("Aku Suka Kamu"));    
console.log(cekPalindrom("Ibu Ratna antar ubi"));

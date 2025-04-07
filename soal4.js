function adaDuplikat(arr) {
  const set = new Set();
  for (let num of arr) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}
const data1 = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(adaDuplikat(data1)); 
console.log(adaDuplikat(data2)); 

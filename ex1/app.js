let names = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
function allLongestStrings() {
  let nameLengths = names.map(x => x.length);
  let maxLength = Math.max(...nameLengths);
  return names.filter(x => x.length === maxLength);
}
console.log(allLongestStrings());
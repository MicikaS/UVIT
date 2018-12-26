// objekat koji predstavlja dnevnik
let dnevnik = [
  {
    preobrazajVeverica: true,
    aktivnosti: ["rad", "drvo", "pica", "trčanje", "televizija"]
  },
  {
    preobrazajVeverica: false,
    aktivnosti: ["hleb", "puding", "pranje zuba", "vikend", "drvo"]
  },
  {
    "preobrazajVeverica": false,
    "aktivnosti": ["lazanja", "naćosi", "pranje zuba", "rad"]
  }];

console.log("=== Dan 1 ===")
let dan1 = dnevnik[0];
console.log(dan1.preobrazajVeverica);
console.log(dan1.aktivnosti);

console.log("=== Dan 3 ===")
let dan3 = dnevnik[2];
console.log(dan3.preobrazajVeverica);
console.log(dan3.aktivnosti);

console.log("=== Svi dani ===")
for (let i in dnevnik) {
  console.log(dnevnik[i].preobrazajVeverica);
  console.log(dnevnik[i].aktivnosti);
}
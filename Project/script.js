const sentence = "Hari ini adalah hari kamis";

function cariKata(sentence) {
  const kata = sentence.split(" ");
  let kataTerpanjang = kata[0];

  for (let i = 1; i < kata.length; i++) {
    if (kata[i].length > kataTerpanjang.length) {
      kataTerpanjang = kata[i];
    }
  }

  return kataTerpanjang;
}

const result = cariKata(sentence);
console.log(result);
